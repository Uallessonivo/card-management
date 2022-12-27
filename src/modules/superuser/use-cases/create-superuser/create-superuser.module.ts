import { Module } from '@nestjs/common'
import { CreateSuperuserService } from './create-superuser.service'
import { CreateSuperuserController } from './create-superuser.controller'
import { PrismaService } from 'src/database/prisma.service'

@Module({
  controllers: [CreateSuperuserController],
  providers: [CreateSuperuserService, PrismaService],
})
export class CreateSuperuserModule {}
