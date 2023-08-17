import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, ValidateIf, IsUUID } from 'class-validator';

export class ResponseUserDTO {
  @ApiProperty()
  @IsUUID()
  id!: string;

  @ApiProperty()
  username!: string;

}
