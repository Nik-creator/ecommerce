import { ReactNode, createContext, useCallback, useLayoutEffect, useState } from "react";
import { ThemeContextValue, Value } from "../types";
import { LocalStorageManager } from "@/shared/services";
import { storageKeys } from "@/app/constants";

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

type ThemeContextProviderProps = {
    children: ReactNode
}

const invertedThemeValues: Record<Value, Value> = {
    dark: 'light',
    light: 'dark'
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const themeStorage = new LocalStorageManager(storageKeys.theme)

    const [themeValue, setThemeValue] = useState<Value>('light')

    const toggleTheme = useCallback(
        () => {
            const newThemeValue = invertedThemeValues[themeValue]

            setThemeValue(newThemeValue)
            themeStorage.set(newThemeValue)
        }, [themeValue]
    )

    useLayoutEffect(() => {
        const syncThemeByStorage = () => {
            const storageValue = themeStorage.get<Value>()

            if (storageValue) {
                setThemeValue(storageValue)
            }
        }

        syncThemeByStorage()
    }, [])

    return (
        <ThemeContext.Provider value={{
            toggleTheme,
            value: themeValue
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider }