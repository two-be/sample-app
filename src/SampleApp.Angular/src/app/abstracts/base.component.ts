import { Component } from "@angular/core"
import { Subject } from "rxjs"

import { log } from "../utilities"

@Component({
    template: ""
})
export class BaseComponent {

    unsubscribe = {
        csp: new Subject<any>(),
        values: new Subject<any>(),
    }

    error(err) {
        if (err.error.message) {
            alert(err.error.message)
        } else {
            alert(err.message)
        }
        console.error(err)
    }

    log(...data: any[]) {
        log(...data)
    }

    ngOnDestroy() {
        Object.keys(this.unsubscribe).forEach(key => {
            this.unsubscribe[key].next()
            this.unsubscribe[key].complete()
        })
    }
}