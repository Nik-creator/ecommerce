import { RuleSetRule } from "webpack"

export const getLoaders = () => {
    const tsLoader: RuleSetRule = {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/
    }


    return [tsLoader]
}