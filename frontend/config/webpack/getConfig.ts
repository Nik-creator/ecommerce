
import webpack from 'webpack';
import { getLoaders } from './getLoaders';
import { getResolve } from './getResolve';
import { getOutput } from './getOutput';
import { getPlugins } from './getPlugins';

import type { Config } from '../types';

export const getConfig = (props: Config): webpack.Configuration & { devServer: any } => {
    const { paths: {
        entry,
        output,
        alias,
        template
    }, mode, isDev, port } = props

    console.log('template', template)

    return {
        mode,
        entry,
        module: {
            rules: getLoaders()
        },
        plugins: getPlugins(template),
        resolve: getResolve(alias),
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