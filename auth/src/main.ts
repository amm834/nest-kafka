import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {Logger} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.KAFKA,
        options: {
            client: {
                brokers: ['relevant-polecat-12912-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'cmVsZXZhbnQtcG9sZWNhdC0xMjkxMiR3Bip8PDYHanESs0ZUmBfI5YdlSK5qxak',
                    password: 'NDNiYThjYzgtYjk2Yy00ZGYwLWJhOGUtNTZhNWRkN2IxMTc3',
                },
                ssl: true,
            },
            consumer: {
                groupId: 'auth-consumer'
            }
        }
    });
    await app.startAllMicroservices();
    await app.listen(8001);
    Logger.log(
        `🚀 Application is running on: http://localhost:8001`
    );
    return app;
}

bootstrap();
