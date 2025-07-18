// src/avaliacoes/dto/find-all-avaliacoes.dto.ts
import { IsOptional, IsInt, IsString, IsIn, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class FindAllProfessorDisciplinaDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  pageSize?: number;

  @IsOptional()
  @IsIn(['createdAt','updatedAt','disciplina','professor'])
  sort?: string = 'professor';

  @IsOptional()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc' = 'desc';

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  professorID?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  disciplinaID?: number;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  include?: string; 

  @IsOptional()
  @IsString()
  token?: string; 
}

