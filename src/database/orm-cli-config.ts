import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1718727943704 } from '../migrations/1718727943704-CreateCoursesTable';
import { CreateTagsTable1718729366482 } from '../migrations/1718729366482-CreateTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1718727943704, CreateTagsTable1718729366482],
});
