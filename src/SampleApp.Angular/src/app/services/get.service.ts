import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { firstValueFrom, Subject, takeUntil } from "rxjs"
import { getApi } from "../utilities"

@Injectable()
export class GetService {

    constructor(private http: HttpClient) { }

    csp(unsubscribe: Subject<any>) {
        unsubscribe.next({})
        return firstValueFrom(this.http.get<any>(getApi("csp")).pipe(takeUntil(unsubscribe)))
    }

    values(unsubscribe: Subject<any>) {
        unsubscribe.next({})
        return firstValueFrom(this.http.get<any>(getApi("values")).pipe(takeUntil(unsubscribe)))
    }
}