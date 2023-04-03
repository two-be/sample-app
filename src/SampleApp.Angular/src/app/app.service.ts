import { Injectable } from "@angular/core"
import { GetService } from "./services/get.service"
import { PostService } from "./services/post.service"

@Injectable()
export class AppService {

    constructor(public get: GetService, public post: PostService) { }
}