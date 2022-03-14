import type { JSONOutput } from 'typedoc';

export const displaySomeType = (someType?: JSONOutput.SomeType): string => {
    if (!someType) return '';

    if (isIntrinsicType(someType) || isTypeParameterType(someType)) {
        return someType.name;
    }

    if (isArrayType(someType)) {
        return `${displaySomeType(someType.elementType)}[]`;
    }

    if (isUnionType(someType)) {
        return someType.types.map(displaySomeType).join(' | ');
    }

    if (isUnknownType(someType)) {
        return 'unknown';
    }

    if (isPredicateType(someType)) {
        return `${someType.asserts ? 'asserts ' : ''}${someType.name}${
            someType.targetType
                ? ` is ${displaySomeType(someType.targetType)}`
                : ''
        }`;
    }

    if (isReferenceType(someType)) {
        let typeArgs = '';
        if (someType.typeArguments && someType.typeArguments.length > 0) {
            typeArgs += '<';
            typeArgs += someType.typeArguments.map(displaySomeType).join(', ');
            typeArgs += '>';
        }
        return someType.name + typeArgs;
    }

    if (isConditionalType(someType)) {
        return `${displaySomeType(
            someType.checkType,
        )} extends ${displaySomeType(someType.extendsType)} ? ${displaySomeType(
            someType.trueType,
        )} : ${displaySomeType(someType.falseType)}`;
    }

    if (isIndexedAccessType(someType)) {
        return `${displaySomeType(someType.objectType)}[${displaySomeType(
            someType.indexType,
        )}]`;
    }

    if (isInferredType(someType)) {
        return `infer ${someType.name}`;
    }

    if (isIntersectionType(someType)) {
        return someType.types.map(displaySomeType).join(' & ');
    }

    if (isLiteralType(someType)) {
        return JSON.stringify(someType.value);
    }

    if (isOptionalType(someType)) {
        return `${displaySomeType(someType.elementType)}?`;
    }

    if (isQueryType(someType)) {
        return `typeof ${displaySomeType(someType.queryType)}`;
    }

    if (isReflectionType(someType)) {
        return someType.declaration?.signatures ? 'function' : 'object';
    }

    if (isRestType(someType)) {
        return `...${displaySomeType(someType.elementType)}`;
    }

    if (isTupleType(someType)) {
        return `[${someType.elements?.map(displaySomeType).join(', ')}]`;
    }

    if (isTypeOperatorType(someType)) {
        return `${someType.operator} ${displaySomeType(someType.target)}`;
    }

    return 'unknown';
};

export const isArrayType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.ArrayType => someType.type === 'array';

export const isConditionalType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.ConditionalType => someType.type === 'conditional';

export const isIndexedAccessType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.IndexedAccessType =>
    someType.type === 'indexedAccess';

export const isInferredType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.InferredType => someType.type === 'inferred';

export const isIntersectionType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.IntersectionType => someType.type === 'intersection';

export const isIntrinsicType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.IntrinsicType => someType.type === 'intrinsic';

export const isLiteralType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.LiteralType => someType.type === 'literal';

export const isOptionalType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.OptionalType => someType.type === 'optional';

export const isPredicateType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.PredicateType => someType.type === 'predicate';

export const isQueryType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.QueryType => someType.type === 'query';

export const isReferenceType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.ReferenceType => someType.type === 'reference';

export const isReflectionType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.ReflectionType => someType.type === 'reflection';

export const isRestType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.RestType => someType.type === 'rest';

export const isTupleType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.TupleType => someType.type === 'tuple';

export const isTypeOperatorType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.TypeOperatorType => someType.type === 'typeOperator';

export const isTypeParameterType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.TypeParameterType =>
    someType.type === 'typeParameter';

export const isUnionType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.UnionType => someType.type === 'union';

export const isUnknownType = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.UnknownType => someType.type === 'unknown';

export const isNamedTupleMember = (
    someType: JSONOutput.SomeType,
): someType is JSONOutput.NamedTupleMemberType =>
    someType.type === 'named-tuple-member';