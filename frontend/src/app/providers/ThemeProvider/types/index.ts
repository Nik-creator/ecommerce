type Value = 'light' | 'dark'

type ThemeContextValue = {
    value: Value
    toggleTheme: () => void
}

export type { ThemeContextValue, Value }