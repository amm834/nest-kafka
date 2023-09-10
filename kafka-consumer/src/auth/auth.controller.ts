import {Controller, Get, Inject} from '@nestjs/common';
import {ClientKafka, MessagePattern, Payload} from '@nestjs/microservices';
import {AuthService} from './auth.service';
import {CreateAuthDto} from './dto/create-auth.dto';
import {UpdateAuthDto} from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {
    }

    @Get('/sign-up')
    createUser() {
        return this.authService.createUser();
    }

}
