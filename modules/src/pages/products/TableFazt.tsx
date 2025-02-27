import { useEffect, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

// Definimos la interfaz para los datos de cada fila
interface DataRow {
	id: number;
	date: string;
	client: string;
	total: number;
	worker: string;
}

// Definimos las columnas con tipos
const columns: TableColumn<DataRow>[] = [
	{
		name: 'ID',
		selector: (row: DataRow) => row.id,
		sortable: true,
	},
	{
		name: 'Fecha',
		selector: (row: DataRow) => row.date,
		sortable: true,
	},
	{
		name: 'Cliente',
		selector: (row: DataRow) => row.client,
		sortable: true,
	},
	{
		name: 'Total',
		selector: (row: DataRow) => row.total,
		sortable: true,
	},
	{
		name: 'Trabajador',
		selector: (row: DataRow) => row.worker,
		sortable: true,
	},
];

// Los datos ahora están tipados con la interfaz DataRow
const data: DataRow[] = [
	{ id: 1, date: '2021-10-10', client: 'Cliente 1', total: 100, worker: 'Trabajador 1' },
	{ id: 2, date: '2021-10-11', client: 'Cliente 2', total: 200, worker: 'Trabajador 2' },
	{ id: 3, date: '2021-10-12', client: 'Cliente 3', total: 300, worker: 'Trabajador 3' },
	{ id: 4, date: '2021-10-10', client: 'Cliente 1', total: 100, worker: 'Trabajador 1' },
	{ id: 5, date: '2021-10-11', client: 'Cliente 2', total: 200, worker: 'Trabajador 2' },
	{ id: 6, date: '2021-10-12', client: 'Cliente 3', total: 300, worker: 'Trabajador 3' },
	{ id: 7, date: '2021-10-10', client: 'Cliente 1', total: 100, worker: 'Trabajador 1' },
	{ id: 8, date: '2021-10-11', client: 'Cliente 2', total: 200, worker: 'Trabajador 2' },
	{ id: 9, date: '2021-10-12', client: 'Cliente 3', total: 300, worker: 'Trabajador 3' },
	{ id: 10, date: '2021-10-10', client: 'Cliente 1', total: 100, worker: 'Trabajador 1' },
	{ id: 11, date: '2021-10-11', client: 'Cliente 2', total: 200, worker: 'Trabajador 2' },
	{ id: 12, date: '2021-10-12', client: 'Cliente 3', total: 300, worker: 'Trabajador 3' },
	{ id: 13, date: '2021-10-10', client: 'Cliente 1', total: 100, worker: 'Trabajador 1' },
	{ id: 14, date: '2021-10-11', client: 'Cliente 2', total: 200, worker: 'Trabajador 2' },
	{ id: 15, date: '2021-10-12', client: 'Cliente 3', total: 300, worker: 'Trabajador 3' },
];

export const TableFazt: React.FC = () => {
	const [records, setRecords] = useState<DataRow[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setRecords(data);
			setLoading(false);
		}, 2000);
		return () => clearTimeout(timeOut);
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const filteredRecords = data.filter((record) => {
			return (
				record.client.toLowerCase().includes(e.target.value.toLowerCase()) ||
				record.date.toLowerCase().includes(e.target.value.toLowerCase()) ||
				record.total.toString().includes(e.target.value) ||
				record.worker.toLowerCase().includes(e.target.value.toLowerCase())
			);
		});
		setRecords(filteredRecords);
	};
	return (
		<div>
			<input type='text' onChange={handleChange} className='bg-white mb-2 py-1 px-2 border-blue-100 border-2 rounded-md focus:outline-1 focus:ring-1 focus:ring-blue-300 focus:border-transparent' placeholder='Buscar...'/>
			<DataTable columns={columns} data={records} pagination progressPending={loading} progressComponent={<h1>Cargando...</h1>} />
		</div>
	);
};
