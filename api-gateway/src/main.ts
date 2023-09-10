import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {Logger} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT || 8000;
    await app.listen(port);

    Logger.log(
        `🚀 Application is running on: http://localhost:${port}`
    );
    return app;
}

bootstrap();
