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
                brokers: ['localhost:9092'],
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
