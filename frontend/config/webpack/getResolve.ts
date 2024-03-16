import { ResolveOptions } from "webpack"
import { Paths } from "../types"

export const getResolve = ({ alias, public: publicAlias }: Paths): ResolveOptions => {
    const extensions = ['.tsx', '.ts', '.js']

    return {
        extensions,
        alias: {
            '@': alias,
            '@public': publicAlias
        },
        mainFiles: ['index.ts'],
        modules: [alias, 'node_modules']
    }
}