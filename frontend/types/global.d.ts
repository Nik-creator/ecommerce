declare module '*.svg' {
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare namespace NodeJS {
    export interface ProcessEnv {
        MY_VARIABLE_1: string;
        MY_OTHER_VARIABLE: string;
    }
}

declare const _IS_DEV_: boolean;