import type { Route } from "../types";
import { lazy } from "react";


export enum RoutesPaths {
    HONE = 'home',
    CART = 'cart'
}

export const routes = {
    [RoutesPaths.HONE]: '/',
    [RoutesPaths.CART]: '/cart'
} as const

const routesConfig: Record<RoutesPaths, Route> = {
    [RoutesPaths.HONE]: {
        path: '/',
        component: lazy(() => import("@/pages/Home"))
    },
    [RoutesPaths.CART]: {
        path: '/cart',
        component: lazy(() => import("@/pages/Home"))
    }
}

export { routesConfig } 