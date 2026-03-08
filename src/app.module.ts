import { Module } from '@nestjs/common';

import { RolesModule } from './roles/roles.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, RolesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
