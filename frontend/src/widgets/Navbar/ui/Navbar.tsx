import { Link } from '@/shared/ui'
import styles from './Navbar.module.css'
import { cls } from "@/shared/lib"
import Profile from '@public/assets/icons/profile.svg'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { LangSwitcher } from '@/widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'


interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

    const { t } = useTranslation()

    return (
        <div className={cls(styles.navbar, [className])}>

            <div className={cls(styles.navbar_container)}>
                <Profile />
                <ThemeSwitcher />
                <LangSwitcher />
                <Link variant='primary' className={cls(styles.navbar_item)} to="/about">{t('homeLink')}</Link>
                <Link variant='secondary' className={cls(styles.navbar_item)} to="/cart">{t('cartLink')}</Link>
            </div>
        </div>
    )
}