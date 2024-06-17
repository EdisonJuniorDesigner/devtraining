import { IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  /* Forma de validar Array, o 'each: true' diz que pra cada item
  essa verificação tem que ser verdadeira */
  @IsString({ each: true })
  readonly tags: string[];
}
