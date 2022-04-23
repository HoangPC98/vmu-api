import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  ForcedSubject,
  InferSubjects,
  RawRuleOf,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { User } from '../database/entities/hoc_vien.entity';
import { Offwork } from '../database/entities/user_info.entity';
import { Review } from '../database/entities/review.entity';
import { UserType } from '../database/entities/usertype.entity';
import { WorkType } from '../database/entities/worktype.entity';
import { WorkTime } from '../database/entities/worktime.entity';
import { AuthUser } from '../auth/AuthUser';
import { Action } from './Action';

const Subjects = [
  User.name,
  Offwork.name,
  Review.name,
  UserType.name,
  WorkTime.name,
  WorkType.name,
  'all',
] as const;
type AppAbilities = [
  Action,
  (
    | typeof Subjects[number]
    | ForcedSubject<Exclude<typeof Subjects[number], 'all'>>
  ),
];
export type AppAbility = Ability<AppAbilities>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: AuthUser) {
    const permissions = JSON.parse(user.permissions);
    return new Ability<AppAbilities>(<RawRuleOf<AppAbility>[]>permissions);
  }
}
