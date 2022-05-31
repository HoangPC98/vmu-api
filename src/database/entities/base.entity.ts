import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export default abstract class CustomBaseEntity extends BaseEntity {
  @CreateDateColumn({
    nullable: false,
    precision: 6,
    default: new Date(),
  })
  created_at?: Date = new Date();

  @UpdateDateColumn({
    nullable: false,
    precision: 6,
    default: new Date(),
  })
  updated_at?: Date = new Date();

  @DeleteDateColumn({
    nullable: true,
  })
  deleted_at?: Date;
}
