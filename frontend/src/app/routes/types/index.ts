import { ComponentType } from "react"
import { routes } from "../ui/config"

type Route = {
    path: typeof routes[keyof typeof routes],
    component: ComponentType
}

export type { Route }