import path from 'path'

import { Configuration } from 'webpack';
import { getConfig } from './config/webpack/getConfig';
import type { BuildEnv, Config, Paths } from './config/types'
import { DEFAULT_DEFAULT_MODE, DEFAULT_DEV_PORT } from './config/constants'

export default ({ mode: webpackMode, port: webpackPort }: BuildEnv): Configuration => {
    const paths: Paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        alias: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public'),
        template: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = webpackMode || DEFAULT_DEFAULT_MODE

    const config: Config = {
        paths,
        mode,
        isDev: mode === DEFAULT_DEFAULT_MODE,
        port: webpackPort || DEFAULT_DEV_PORT
    }

    return getConfig(config)
}