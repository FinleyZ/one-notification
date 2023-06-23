import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EmailNotificationModule } from './email-notification/email-notification.module';
import { PrismaModule } from './prisma/prisma.module';
import { ApiModule } from './api/api.module';
import { MailingModule } from './mailing/mailing.module';

@Module({
  imports: [UserModule, AuthModule, EmailNotificationModule, PrismaModule, ApiModule, MailingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
