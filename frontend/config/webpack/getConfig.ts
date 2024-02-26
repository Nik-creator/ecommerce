
import webpack from 'webpack';
import { getLoaders } from './getLoaders';
import { getResolve } from './getResolve';
import { getOutput } from './getOutput';
import { getPlugins } from './getPlugins';

import type { Config } from '../types';

export const getConfig = (props: Config): webpack.Configuration => {
    const { paths: {
        entry,
        output,
        alias,
        template
    }, mode } = props

    return {
        mode,
        entry,
        module: {
            rules: getLoaders()
        },
        plugins: getPlugins(template),
        resolve: getResolve(alias),
        output: getOutput(output)
    }
}