import { Component, OnDestroy, OnInit } from "@angular/core"

import { BaseComponent } from "./abstracts"
import { AppService } from "./app.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent extends BaseComponent implements OnDestroy, OnInit {

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

  getBrowserInfo() {
    this.log(navigator)
  }

  ngOnInit() {
    let listOfA = document.getElementsByClassName("link")
    Array.from(listOfA).forEach(x => {
      x.addEventListener("click", y => {
        y.preventDefault()
        this.log(y.target["href"])
      })
    })
  }

  async post() {
    try {
      this.log(await this.service.post.values())
    } catch (err) {
      this.error(err)
    }
  }
}
