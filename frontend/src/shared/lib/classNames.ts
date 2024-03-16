type Modes = { [key: string]: boolean | string }
type Additionals = (string | undefined)[]

type ClassNamesProps = {
    (cls: string, modes?: Modes, additional?: Additionals): string
    (cls: string, additional?: Additionals): string
}

const classNames: ClassNamesProps = (cls: string, props?: Modes | Additionals, otherProps?: Additionals): string => {

    let modes: Modes = {}
    let additional: Additionals = []

    if (props && Array.isArray(props)) {
        additional = props
    } else {
        if (otherProps) {
            additional = otherProps
        }
    }

    const modesArr = Object.entries(modes || {}).reduce<string[]>((acc, [modeKey, modeValue]) => {
        if (modeValue) {
            return acc.concat(modeKey)
        }

        return acc
    }, [])

    return [
        cls,
        ...additional.filter(Boolean),
        ...modesArr
    ].join(' ')
}

export { classNames as cls }