import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EmailNotificationModule } from './email-notification/email-notification.module';

@Module({
  imports: [UserModule, AuthModule, EmailNotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
