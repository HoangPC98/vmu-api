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
import { HocVien } from '../database/entities/hoc_vien.entity';
import { HocPhan } from '../database/entities/hoc_phan.entity';
import { ChuyenNganh } from '../database/entities/chuyen_nganh.entity';
import { Lop } from '../database/entities/lop.entity';
import { Khoa } from '../database/entities/khoa.entity';
import { PhanQuyen } from '../database/entities/phan_quyen.entity';
import { BangDiem } from '../database/entities/bang_diem.entity';
import { ThongBao } from '../database/entities/thong_bao.entity';
import { JwtPayload } from '../auth/JwtPayload';
import { Action } from './Action';
import { User } from '../database/entities/user.entity';

const Subjects = [
  HocPhan.name,
  ChuyenNganh.name,
  Khoa.name,
  Lop.name,
  PhanQuyen.name,
  BangDiem.name,
  ThongBao.name,
  User.name,
  HocVien.name,
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
  createForUser(user: JwtPayload) {
    const permissions = JSON.parse("['ad', 'bc']");
    return new Ability<AppAbilities>(<RawRuleOf<AppAbility>[]>permissions);
  }
}
