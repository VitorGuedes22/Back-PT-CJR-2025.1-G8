import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ComentarioEntity } from "src/comentarios/entities/comentario.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Professor } from "src/professor/entities/professor.entity";
import { DisciplinaEntity } from "src/disciplina/entities/disciplina.entity";

export class AvaliacaoEntity {
    @IsInt()
    id: number;

    @IsInt()
    @IsNotEmpty()
    usuarioID: number;

    usuario: Usuario; // Relação N:1 (muitos para um usuário)

    @IsInt()
    @IsNotEmpty()
    professorID: number;
    
    professor: Professor; // Relação N:1 (muitos para um professor)

    @IsInt()
    @IsNotEmpty()
    disciplinaID: number;

    disciplina: DisciplinaEntity; // Relação N:1 (muitos para uma disciplina)

    @IsString()
    @IsNotEmpty({ message: 'O campo conteúdo não pode estar vazio.' })
    conteudo: string;

    @IsOptional()
    comentarios: ComentarioEntity[]; // Relação 1:N (uma avaliação tem muitos comentários)

    createdAt: Date;
    updatedAt: Date;
}




