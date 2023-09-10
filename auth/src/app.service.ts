import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    createUser(data: any): any {
        return JSON.stringify(data);
    }
}
