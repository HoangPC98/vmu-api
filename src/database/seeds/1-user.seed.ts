import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserType } from '../entities/usertype.entity';

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .orIgnore()
      .into(UserType)
      .values([
        { id: 1, desc: 'admin' },
        { id: 2, desc: 'user' },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .orIgnore()
      .into(User)
      .values([
        { id: 1, email: 'admin@email.com', user_type_id: 1 },
        { id: 2, email: 'user@email.com', user_type_id: 2 },
      ])
      .execute();
  }
}
