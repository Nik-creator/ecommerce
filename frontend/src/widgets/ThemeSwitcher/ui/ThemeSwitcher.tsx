import { useTheme } from "@/app/providers/ThemeProvider"
import { useTranslation } from "react-i18next"

const ThemeSwitcher = () => {
    const { value, toggleTheme } = useTheme()

    const { t } = useTranslation()

    return (
        <div>
            <button onClick={toggleTheme}>{t('changeTheme')}</button>
        </div>
    )
}


export { ThemeSwitcher }