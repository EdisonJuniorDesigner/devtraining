import { CoursesService } from './courses.service';
import { randomUUID } from 'node:crypto';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

describe('CoursesService unit tests', () => {
  let service: CoursesService;
  let id: string;
  let created_at: Date;
  let expectOutputTags: any;
  let expectOutputCourses: any;
  let mockCoursesRepository: any;
  let mockTagRepository: any;

  beforeEach(async () => {
    service = new CoursesService();
    id = randomUUID();
    created_at = new Date();
    expectOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at,
      },
    ];
    expectOutputCourses = {
      id,
      name: 'test',
      description: 'test description',
      created_at,
      tags: expectOutputTags,
    };

    mockCoursesRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      update: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
    };

    mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
      findOne: jest.fn(),
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const createCourseDTO: CreateCourseDto = {
      name: 'test',
      description: 'test description',
      tags: ['nestjs'],
    };

    const newCourse = await service.create(createCourseDTO);

    // ToHaveBeenCalled = quer dizer que eu espero que ele tenha sido chamado.
    expect(mockCoursesRepository.save).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(newCourse);
  });

  it('should list all courses', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const courses = await service.findAll();

    // ToHaveBeenCalled = quer dizer que eu espero que ele tenha sido chamado.
    expect(mockCoursesRepository.find).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(courses);
  });

  it('should gets a course by id', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const course = await service.findOne(id);

    // ToHaveBeenCalled = quer dizer que eu espero que ele tenha sido chamado.
    expect(mockCoursesRepository.findOne).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });

  it('should update a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const updateCourseDTO: UpdateCourseDto = {
      name: 'test',
      description: 'test description',
      tags: ['nestjs'],
    };

    const course = await service.update(id, updateCourseDTO);

    // ToHaveBeenCalled = quer dizer que eu espero que ele tenha sido chamado.
    expect(mockCoursesRepository.save).toHaveBeenCalled();
    expect(mockCoursesRepository.preload).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });

  it('should delete a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const course = await service.remove(id);

    // ToHaveBeenCalled = quer dizer que eu espero que ele tenha sido chamado.
    expect(mockCoursesRepository.findOne).toHaveBeenCalled();
    expect(mockCoursesRepository.remove).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });
});
