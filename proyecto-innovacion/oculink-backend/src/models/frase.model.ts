import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('frases_guardadas')
export class Frase {
	@PrimaryGeneratedColumn()
	id: number;
	@Column('text')
	frase: string;
	@CreateDateColumn({ name: 'fecha_guardado' })
	fechaGuardado: Date;
}
