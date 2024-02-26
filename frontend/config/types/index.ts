import { Configuration } from "webpack"

type Paths = {
    entry: string,
    output: string
    alias: string
    template: string
}

type Config = {
    paths: Paths
    mode: Configuration['mode']
}

type BuildEnv = {
    mode: Configuration['mode']
}

export { Paths, Config, BuildEnv }