import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { CreateSuperuserDTO } from '../../dto/create-superuser.dto'

@Injectable()
export class CreateSuperuserService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreateSuperuserDTO) {
    const userExists = this.prisma.superuser.findFirst({
      where: {
        email: input.email,
      },
    })

    if (userExists) {
      throw new Error()
    }

    await this.prisma.superuser.create({
      data: {
        name: input.name,
        email: input.email,
        password: input.password,
      },
    })
  }
}
