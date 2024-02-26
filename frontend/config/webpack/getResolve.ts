import { ResolveOptions } from "webpack"
import { Paths } from "../types"

export const getResolve = (alias: Paths['alias']): ResolveOptions => {
    const extensions = ['.tsx', '.ts', '.js']

    return {
        extensions,
        alias: {
            '@': alias
        }
    }
}