import { Ability, ForcedSubject } from '@casl/ability';
import { AuthUser } from '../auth/AuthUser';
import { Action } from './Action';
declare const Subjects: readonly [string, string, string, string, string, string, "all"];
declare type AppAbilities = [
    Action,
    (typeof Subjects[number] | ForcedSubject<Exclude<typeof Subjects[number], 'all'>>)
];
export declare type AppAbility = Ability<AppAbilities>;
export declare class CaslAbilityFactory {
    createForUser(user: AuthUser): Ability<AppAbilities, import("@casl/ability").MongoQuery<import("@casl/ability/dist/types/types").AnyObject>>;
}
export {};
