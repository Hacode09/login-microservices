// app.module.ts
import { Module } from '@nestjs/common';
import { LoggerService } from './login.service';

@Module({
  providers: [LoggerService],
})
export class AppModule {}
