import { Link } from "react-router-dom"
import { AppRouter } from "./routes"
import { useTheme } from "./providers/ThemeProvider"
import { Navbar } from "@/widgets/Navbar"
import { useTranslation } from "react-i18next"
import { Suspense } from "react"


export const App = () => {
    const { value } = useTheme()

    return (
        <div className={`app ${value}`}>
            <Navbar />
            <AppRouter />
        </div>
    )
}