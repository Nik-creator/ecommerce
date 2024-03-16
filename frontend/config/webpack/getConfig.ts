
import webpack from 'webpack';
import { getLoaders } from './getLoaders';
import { getResolve } from './getResolve';
import { getOutput } from './getOutput';
import { getPlugins } from './getPlugins';

import type { Config } from '../types';

export const getConfig = (props: Config): webpack.Configuration & { devServer: any } => {
    const { paths, mode, isDev, port } = props

    const { entry,
        output,
        alias,
        template } = paths;

    return {
        mode,
        entry,
        module: {
            rules: getLoaders(isDev)
        },
        plugins: getPlugins(template, isDev),
        resolve: getResolve(paths),
        output: getOutput(output),
        devServer: isDev ? {
            port,
            open: true,
            historyApiFallback: {
                index: '/'
            }
        } : undefined
    }
}