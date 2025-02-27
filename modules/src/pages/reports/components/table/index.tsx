import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { useTableData } from './hooks/useTableData'
import { TableHeader } from './components/TableHeader'
import { Sale } from '../../../../interfaces'

interface SalesTableProps {
  data: Sale[]
}

export const SalesTable = ({ data }: SalesTableProps) => {
  const { tableOptions } = useTableData(data)

  const table = useMaterialReactTable({
    ...tableOptions,
    renderTopToolbarCustomActions: TableHeader,
  })

  return <MaterialReactTable table={table} />
}