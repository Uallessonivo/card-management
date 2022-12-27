import { Module } from '@nestjs/common'
import { SuperuserModule } from './modules/superuser/superuser.module'

@Module({
  imports: [SuperuserModule],
  providers: [],
})
export class AppModule {}
