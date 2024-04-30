import { Injectable } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreaturesService {
  constructor(private prisma: PrismaService) {}
  create(createCreatureDto: CreateCreatureDto) {
    return 'This action adds a new creature';
  }

  findAll() {
    return this.prisma.creature.findMany({ where: { extinct: false } });
  }

  findAllExtincts() {
    return this.prisma.creature.findMany({ where: { extinct: true } });
  }
}
