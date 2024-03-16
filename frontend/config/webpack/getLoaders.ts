import { Config } from "config/types"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { RuleSetRule } from "webpack"

export const getLoaders = (isDev: Config['isDev']) => {
    const tsLoader: RuleSetRule = {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const cssLoader: RuleSetRule = {
        test: /\.css$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module')),
                        localIdentName: '[name]__[path]--[hash:base64:5]'
                    }
                }
            }
        ],
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
            publicPath: 'assets',
        },
    }

    return [tsLoader, cssLoader, svgLoader, fileLoader]
}