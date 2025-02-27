import { MRT_ColumnDef } from 'material-react-table'
import { Sale } from '../../../../../interfaces'

export const SALES_COLUMNS: MRT_ColumnDef<Sale>[] = [
  {
    accessorKey: 'date',
    header: 'Fecha',
    enableHiding: false,
  },
  {
    accessorKey: 'client',
    header: 'Cliente',
    enableHiding: false,
  },
  {
    accessorKey: 'total',
    header: 'Total',
    enableHiding: false,
    Cell: ({ cell }) => `S/. ${cell.getValue<number>().toFixed(2)}`,
  },
]