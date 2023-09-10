import {Controller, Get} from '@nestjs/common';
import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Get('sign-up')

    signUp(): any {
        return this.authService.signUp();
    }
}
