import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { CreateSuperuserDTO } from './dto/create-superuser.dto'
import { Superuser } from './model/superuser.model'

@Injectable()
export class SuperuserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSuperuserDTO) {
    const userExists = await this.prisma.superuser.findFirst({
      where: {
        email: data.email,
      },
    })

    if (userExists) {
      throw new Error()
    }

    await this.prisma.superuser.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    })
  }

  async findById(id: string): Promise<Superuser | Error> {
    const userExists = await this.prisma.superuser.findFirst({
      where: { id },
    })

    if (!userExists) {
      throw new Error()
    }

    return new Superuser(userExists.id, userExists.name, userExists.email)
  }
}
