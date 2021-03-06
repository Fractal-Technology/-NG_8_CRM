import {userParamExample} from '@fractalcrm/enums';
import {ApiModelProperty} from '@nestjs/swagger';

import {Type} from 'class-transformer';
import {IsNotEmpty, IsString} from 'class-validator';

export class AuthenticationDto {
	@ApiModelProperty({default: userParamExample.password})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	username: string;
	@ApiModelProperty({default: userParamExample.password})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	password: string;

}
