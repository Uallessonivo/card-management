import { Module } from '@nestjs/common'
import { CreateSuperuserModule } from './use-cases/create-superuser/create-superuser.module'

@Module({
  controllers: [],
  providers: [],
  imports: [CreateSuperuserModule],
})
export class SuperuserModule {}
