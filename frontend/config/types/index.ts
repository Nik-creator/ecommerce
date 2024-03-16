import { Configuration } from "webpack"

type Paths = {
    entry: string,
    output: string
    alias: string
    public: string
    template: string
}

type Config = {
    paths: Paths
    mode: Configuration['mode']
    isDev: boolean
    port: number
}

type BuildEnv = {
    mode: Configuration['mode']
    port: number
}

export type { Paths, Config, BuildEnv }