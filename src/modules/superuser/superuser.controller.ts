import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common'
import { SuperuserService } from './superuser.service'
import { CreateSuperuserDTO } from './dto/create-superuser.dto'

@Controller('superuser')
export class SuperuserController {
  constructor(private readonly superuserService: SuperuserService) {}

  @Post('create')
  async createSuperuser(@Body() input: CreateSuperuserDTO) {
    try {
      await this.superuserService.create(input)
    } catch {
      throw new BadRequestException('Usuário já existe!')
    }
  }

  @Get(':id')
  async getSuperuserById(@Param('id') id: string) {
    try {
      return await this.superuserService.findById(id)
    } catch {
      throw new BadRequestException('Usuário não localizado')
    }
  }
}
