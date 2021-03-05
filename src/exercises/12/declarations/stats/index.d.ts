declare module 'stats' {
    type NumberOrNull<T> = T | null;
    type Func =  <T>(input: T[], comparator: (arg1?: T,arg2?:T) => number) => NumberOrNull<T>;

    export const getMaxIndex:Func;
    export const getMaxElement:Func;
    export const getMinIndex:Func;
    export const getMinElement:Func;
    export const getMedianIndex:Func;
    export const getMedianElement:Func;
    export const getAverageValue:Func
}
