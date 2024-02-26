import { Configuration } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Paths } from "../types";

export const getPlugins = (tempate: Paths['template']): Configuration['plugins'] => {
    return [new HtmlWebpackPlugin({
        tempate
    })]
}