import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {EventPattern, MessagePattern, Payload} from "@nestjs/microservices";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @EventPattern("create_user")
    signUp(@Payload() data: any): any {
        console.log("create_user", data);
        return this.appService.createUser(data);
    }
}
