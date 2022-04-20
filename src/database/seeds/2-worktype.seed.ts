import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { WorkType } from '../entities/worktype.entity';

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .orIgnore()
      .into(WorkType)
      .values([
        { id: 1, desc: 'offline' },
        { id: 2, desc: 'remote' },
        { id: 3, desc: 'overtime' },
      ])
      .execute();
  }
}
