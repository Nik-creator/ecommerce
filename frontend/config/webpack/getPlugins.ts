import { Configuration } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Paths } from "../types";

export const getPlugins = (template: Paths['template']): Configuration['plugins'] => [new HtmlWebpackPlugin({
    template
})]
