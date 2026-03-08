import { Injectable, Logger } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import PrismaService from '../prisma/prisma.service';

@Injectable()
export default class RolesService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly logger = new Logger(RolesService.name);

  async create(createRoleDto: CreateRoleDto) {
    try {
      const role = await this.prisma.role.create({ data: createRoleDto });
      this.logger.log(`Role created successfully: ${JSON.stringify(role)}`);
      return role;
    } catch (error: any) {
      this.logger.error(`Failed to create role: ${error.message}`);
      throw error;
    }
  }

  findAll() {
    return this.prisma.role.findMany({ where: { deleted: false } });
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
