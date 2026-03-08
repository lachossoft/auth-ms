import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  roleId: number;

  @IsString({
    message: 'Role name must be a string',
  })
  roleName: string;
}
