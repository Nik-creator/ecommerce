import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routesConfig } from "./config"

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>loading</div>}>
            <Routes>
                {Object.values(routesConfig).map(({ component: Component, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <Component />
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    )
}