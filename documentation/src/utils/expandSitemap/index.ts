import type { JsonDocs } from '@stencil/core/internal';
import type { ProjectReflection } from 'typedoc';
import { createTypedocLookup, TypedocLookup } from './createTypedocLookup';
import { fixTagNames } from './fixTagName';
import {
    getPackageJson,
    getReadme,
    optionallyGetStencilDocs,
    optionallyGetTypedocs,
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
    children: string[];
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

export interface Sitemap {
    sections: Section[];
    libs: Record<string, Lib>;
}

export const expandSitemap = (siteDefinition: SectionDefinition[]): Sitemap => {
    const sitemap: Sitemap = {
        sections: [],
        libs: {},
    };

    for (const { title, children } of siteDefinition) {
        const section: Section = {
            id: slugize(title),
            title: title,
            children: [],
        };

        for (const libDef of children) {
            const lib = expandLib(libDef);
            section.children.push(lib.slug);
            sitemap.libs[lib.slug] = lib;
        }

        sitemap.sections.push(section);
    }

    return sitemap;
};

const expandLib = ({ title, filePath }: LibDefinition): Lib => {
    const slug = slugize(title);
    const project = fixTagNames(optionallyGetTypedocs(slug));
    const packageJson = getPackageJson(slug);

    return {
        title,
        slug,
        crumb: { name: title, path: `/${slug}` },
        filePath,
        packageJson,
        typeDocs: project
            ? { project, lookup: createTypedocLookup(project) }
            : undefined,
        stencilDocs: optionallyGetStencilDocs(slug),
        readme: getReadme(slug),
    };
};

const slugize = (str: string) => str.toLowerCase().replace(/\s/g, '-');
