import { Resolver } from '@nestjs/graphql';
import { FollowService } from './follow.service';

@Resolver()
export class FollowResolver {
	public constructor(private readonly followService: FollowService) {}
}
