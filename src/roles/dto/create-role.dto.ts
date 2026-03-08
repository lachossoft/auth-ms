import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsNumber()
  @IsPositive()
  roleId: number;

  @IsString()
  roleName: string;
}
