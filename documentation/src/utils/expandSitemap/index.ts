import type { JsonDocs } from '@stencil/core/internal';
import type { ProjectReflection } from 'typedoc';
import { createTypedocLookup, TypedocLookup } from './createTypedocLookup';
import { fixTagNames } from './fixTagName';

import {
    optionallyRequireStencilDocs,
    optionallyRequireTypeDocs,
    requirePackageJson,
    requireReadme,
} from './requires';

export interface SectionDefinition {
    title: string;
    children: LibDefinition[];
}

export interface LibDefinition {
    /*
     * Library short name
     */
    title: string;
    /*
     * path to files from repo root
     */
    filePath: string;
}

interface Section {
    id: string;
    title: string;
    children: Lib[];
}

export interface Lib extends LibDefinition {
    /*
     * docs generated by stencil
     */
    stencilDocs?: JsonDocs;
    /*
     * docs generated by typedoc
     */
    typeDocs?: {
        project: ProjectReflection;
        lookup: TypedocLookup;
    };
    /*
     * readmes
     */
    readme: string;
    /*
     * base url path
     */
    slug: string;
    /*
     * Breadcrumb root.
     */
    crumb: { name: string; path: string };
    /*
     * resolved package.json
     */
    packageJson: PackageJson;
}

export interface PackageJson {
    name: string;
    version: string;
    description: string;
    deprecated?: string;
    scripts?: Record<string, string>;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
}

export const expandSitemap = (sitemap: SectionDefinition[]): Section[] =>
    sitemap.map(expandSection);

const expandSection = (section: SectionDefinition) => ({
    id: slugize(section.title),
    title: section.title,
    children: section.children.map(expandLib),
});

const expandLib = ({ title, filePath }: LibDefinition): Lib => {
    const project = fixTagNames(optionallyRequireTypeDocs(slugize(title)));
    const packageJson = requirePackageJson(`${filePath}/package.json`);
    const slug = slugize(title);

    return {
        title,
        slug,
        crumb: { name: title, path: `/${slug}` },
        filePath,
        packageJson,
        typeDocs: project
            ? { project, lookup: createTypedocLookup(project) }
            : undefined,
        stencilDocs: optionallyRequireStencilDocs(slug),
        readme: requireReadme(`${filePath}/readme.md`),
    };
};

const slugize = (str: string) => str.toLowerCase().replace(/\s/g, '-');
