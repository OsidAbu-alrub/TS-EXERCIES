declare module 'str-utils' {
    // export const ...
    // export function ...
    type StringMan = (value:string) => string;
    export const stringReverse:StringMan;
    export const stringToLower:StringMan;
    export const stringToUpper:StringMan;
    export const stringRandomize:StringMan;
    export const stringInvertCase:StringMan;
}
