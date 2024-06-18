import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1718727943704 } from '../migrations/1718727943704-CreateCoursesTable';
import { CreateTagsTable1718729366482 } from '../migrations/1718729366482-CreateTagsTable';
import { CreateCourseTagsTable1718730507196 } from '../migrations/1718730507196-CreateCourseTagsTable';
import { AddCoursesIdToCoursesTagsTable1718730945071 } from '../migrations/1718730945071-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1718731793645 } from '../migrations/1718731793645-AddTagsIdToCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1718727943704,
    CreateTagsTable1718729366482,
    CreateCourseTagsTable1718730507196,
    AddCoursesIdToCoursesTagsTable1718730945071,
    AddTagsIdToCoursesTagsTable1718731793645,
  ],
});
