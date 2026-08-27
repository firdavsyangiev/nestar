import { Field, Int, ObjectType } from '@nestjs/graphql';
import type { ObjectId } from 'mongoose';
import { ViewGroup } from '../../enums/view.enum';

@ObjectType()
export class View {
	@Field(() => String)
	_id!: ObjectId;

	@Field(() => ViewGroup)
	viewGroup!: string;

	@Field(() => String)
	viewRefId!: ObjectId;

	@Field(() => String)
	memberId!: ObjectId;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date;

	@Field(() => Date, { nullable: true })
	createdAt?: Date;
}
