import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['verbose'],
  });
  const config = new DocumentBuilder()
    .setTitle('Break2ru')
    .setDescription('The Break2ru API description')
    .setVersion('1.0')
    .addTag('Break2ru')
    .addBearerAuth(
      {type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header'},
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors({
      allowedHeaders:"*",
      origin: "*"
  });

  await app.listen(process.env.PORT || 5000);
}
bootstrap();
