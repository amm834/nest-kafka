import {Inject, Injectable} from '@nestjs/common';
import {ClientKafka} from "@nestjs/microservices";

@Injectable()
export class AuthService {

    constructor(@Inject('AUTH_SERVICE') private readonly client: ClientKafka) {
    }

    createUser() {
        this.client.emit('create_user', {name: 'John', age: 25});
    }

}
