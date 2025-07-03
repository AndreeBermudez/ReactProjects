import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('historial')
export class Historial {
	@PrimaryGeneratedColumn()
	id: number;
	@Column('text')
	texto: string;
	@CreateDateColumn({ name: 'fecha_guardado' })
	fechaGuardado: Date;
}
