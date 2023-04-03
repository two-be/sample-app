import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { abstractComponents } from "./abstracts"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AppService } from "./app.service"
import { services } from "./services"

@NgModule({
  declarations: [
    AppComponent,
    abstractComponents,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    AppService,
    services,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
