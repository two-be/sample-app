import { isDevMode } from "@angular/core"

import { ApiRoute } from "./types"


export let getApi = (route: ApiRoute, path?: string) => {
    let baseAddress = isDevMode() ? "http://localhost:5161" : ""
    path = path || ""
    return `${baseAddress}/api/${route}/${path}`
}

export let log = (...data: any[]) => {
    if (!isDevMode()) {
        return
    }
    console.log(...data)
}