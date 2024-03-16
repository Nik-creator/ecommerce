import { useContext } from "react"
import { ThemeContext } from "./context"

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useContext должен использоваться вместе с ThemeContext')
    }

    return context
}