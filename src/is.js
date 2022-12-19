const toString = Object.prototype.toString;

export function is(val, type) {
    return toString.call(val) === `[object ${type}]`;
}
export function isDef(val) {
    return typeof val !== 'undefined';
}

export function isUnDef(val) {
    return !isDef(val);
}

export function isObject(val) {
    return val !== null && is(val, 'Object');
}
