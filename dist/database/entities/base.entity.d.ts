import { BaseEntity } from 'typeorm';
export default abstract class CustomBaseEntity extends BaseEntity {
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
