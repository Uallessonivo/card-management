import { Body, Controller, Post } from '@nestjs/common'
import { CreateSuperuserService } from './create-superuser.service'
import { CreateSuperuserDTO } from '../../dto/create-superuser.dto'

@Controller('create-superuser')
export class CreateSuperuserController {
  constructor(
    private readonly createSuperuserService: CreateSuperuserService,
  ) {}

  @Post()
  async createSuperuser(@Body() data: CreateSuperuserDTO) {
    return this.createSuperuserService.create(data)
  }
}
