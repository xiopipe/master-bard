import { ApiProperty } from '@nestjs/swagger';
import {
	IsBoolean,
	IsNotEmpty,
	IsUUID,
	IsDate,
} from 'class-validator';

export class ResponseCampaignDTO {
	@ApiProperty({ required: false })
	@IsUUID('4')
	id!: string;

	@ApiProperty()
	name!: string;

	@ApiProperty({ required: false })
	description!: string;

	@ApiProperty({ required: false })
	@IsDate()
	createdAt!: Date;

	@ApiProperty({ required: false })
	@IsDate()
	updatedAt!: Date;

	@ApiProperty({ required: false })
	@IsBoolean()
	isActive!: boolean;

	@ApiProperty({ required: false })
	@IsUUID('4')
	createdBy!: string;
}
