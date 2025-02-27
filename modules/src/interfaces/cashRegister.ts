export interface CashRegister {
	id: number;
	monto_inicial: number;
	trabajador_id: number;
	monto_final: number | null;
	fecha_apertura: Date;
	fecha_cierre: Date | null;
	estado: string;
}

export type CreateCashRegister = Pick<CashRegister, 'monto_inicial' | 'trabajador_id'>;
export type CloseCashRegister = Pick<CashRegister, 'id' | 'monto_final'>;
