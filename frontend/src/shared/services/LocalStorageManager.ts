class LocalStorageManager {
    private key: string

    constructor(keyName: string) {
        if (!keyName) {
            throw Error('keyName is required property')
        }

        this.key = keyName
    }

    private parse<T>(value: string) {
        return JSON.parse(value) as T
    }

    private stringify<T>(value: T) {
        return JSON.stringify(value)
    }

    get has() {
        return Boolean(localStorage.getItem(this.key) || '')
    }

    set<T>(value: T) {
        localStorage.setItem(this.key, this.stringify(value))
    }

    remove() {
        localStorage.removeItem(this.key)
    }

    get<T>() {
        if (this.has) {
            return this.parse<T>(localStorage.getItem(this.key) as string)

        }

        return ''
    }
}

export { LocalStorageManager }