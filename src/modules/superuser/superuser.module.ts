import { Module } from '@nestjs/common'
import { SuperuserService } from './superuser.service'
import { SuperuserController } from './superuser.controller'
import { PrismaService } from 'src/database/prisma.service'

@Module({
  controllers: [SuperuserController],
  providers: [SuperuserService, PrismaService],
})
export class SuperuserModule {}
