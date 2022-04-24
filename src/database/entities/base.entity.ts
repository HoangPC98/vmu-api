import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export default abstract class CustomBaseEntity extends BaseEntity {
  @CreateDateColumn({
    nullable: false,
  })
  created_at?: Date = new Date();

  @UpdateDateColumn({
    nullable: false,
  })
  updated_at?: Date = new Date();

  @DeleteDateColumn({
    nullable: true,
  })
  deleted_at?: Date;
}
