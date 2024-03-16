import { useTranslation } from "react-i18next"

const LangSwitcher = () => {
    const { t, i18n } = useTranslation()

    const onChangeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? "en" : "ru")
    }

    return (
        <div>
            <button onClick={onChangeLang}>{t('changeLang')}</button>
        </div>
    )
}

export { LangSwitcher }