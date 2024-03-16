import { ReactNode } from "react"
import { ThemeContextProvider } from "../lib/context"

type WithThemeProps = {
    children: ReactNode
}

const WithTheme = ({ children }: WithThemeProps) => {
    return (
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
    )
}

export { WithTheme }