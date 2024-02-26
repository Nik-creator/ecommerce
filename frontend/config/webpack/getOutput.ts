import { Configuration } from "webpack"
import { Paths } from "../types"

export const getOutput = (path: Paths['output']): Configuration['output'] => {

    return {
        filename: "[name].[contenthash:8].js",
        path,
        clean: true
    }
}