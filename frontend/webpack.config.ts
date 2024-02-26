import path from 'path';
import { Configuration } from 'webpack';
import { getConfig } from './config/webpack/getConfig';
import type { BuildEnv, Config, Paths } from './config/types'
import { DEFAULT_DEFAULT_MODE } from './config/constants'

export default ({ mode: webpackMode }: BuildEnv): Configuration => {
    const paths: Paths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build'),
        alias: path.resolve(__dirname, 'src'),
        template: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode = webpackMode || DEFAULT_DEFAULT_MODE

    const config: Config = {
        paths,
        mode
    }

    return getConfig(config)
}