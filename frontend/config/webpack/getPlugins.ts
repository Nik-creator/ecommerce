import type { Configuration } from "webpack";
import webpack from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { Config, Paths } from "../types";


export const getPlugins = (template: Paths['template'], isDev: Config['isDev']): Configuration['plugins'] => [
    new HtmlWebpackPlugin({ template }),
    isDev ? undefined : new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
        _IS_DEV_: JSON.stringify(isDev)
    }),
    new webpack.HotModuleReplacementPlugin({})
]
