import {Inject, Injectable} from '@nestjs/common';
import {ClientKafka} from "@nestjs/microservices";

@Injectable()
export class AuthService {

    constructor(
        @Inject('AUTH_MICROSERVICE') private readonly client: ClientKafka,
    ) {
    }

    async signUp(): Promise<any> {
        return this.client.emit('create_user', JSON.stringify({name: 'John', email: 'john@gmail.com'}))
    }
}
