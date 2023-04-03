import { Component, OnDestroy } from "@angular/core"

import { BaseComponent } from "./abstracts"
import { AppService } from "./app.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent extends BaseComponent implements OnDestroy {

  constructor(private service: AppService) {
    super()
  }

  async csp() {
    try {
      let rs = await this.service.get.csp(this.unsubscribe.csp)
      this.log(rs)
    } catch (err) {
      this.error(err)
    }
  }

  async get() {
    try {
      let rs = await this.service.get.values(this.unsubscribe.values)
      this.log(rs)
    } catch (err) {
      this.error(err)
    }
  }

  async post() {
    try {
      this.log(await this.service.post.values())
    } catch (err) {
      this.error(err)
    }
  }
}
