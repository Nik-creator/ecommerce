import { Configuration } from "webpack"
import { Paths } from "../types"

export const getOutput = (path: Paths['output']): Configuration['output'] => {

    return {
        filename: "[name].[contenthash].js",
        path,
        clean: true
    }
}