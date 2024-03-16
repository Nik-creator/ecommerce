import { cls } from "@/shared/lib"
import styles from './Link.module.css'
import { Link as RRLink, LinkProps as RRLinkProps } from "react-router-dom"

type Variant = 'primary' | 'secondary'
type Size = 's' | 'm' | 'l'

interface LinkProps extends RRLinkProps {
    variant?: Variant
    size?: Size
}

export const Link = ({ className, to, variant = 'primary', size = 'm', children }: LinkProps) => {
    return (
        <RRLink className={cls('', [className, styles[variant], styles[size]])} to={to}>{children}</RRLink>
    )
}