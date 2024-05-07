import { Injectable, Param } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateCreatureDto } from './dto/update-creature.dto';

@Injectable()
export class CreaturesService {
  constructor(private prisma: PrismaService) {}

  create(createCreatureDto: CreateCreatureDto) {
    return this.prisma.creature.create({ data: createCreatureDto });
  }

  findAll() {
    return this.prisma.creature.findMany();
  }

  findAllExtincts() {
    return this.prisma.creature.findMany({ where: { extinct: true } });
  }

  findOne(id: number) {
    return this.prisma.creature.findUnique({ where: { id } });
  }

  update(id: number, updateCreatureDto: UpdateCreatureDto) {
    return this.prisma.creature.update({
      where: { id },
      data: updateCreatureDto,
    });
  }
  remove(id: number) {
    return this.prisma.creature.delete({ where: { id } });
  }
}
