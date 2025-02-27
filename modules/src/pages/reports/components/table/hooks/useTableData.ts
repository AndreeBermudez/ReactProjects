import { useMemo } from 'react'
import { Sale } from '../../../../../interfaces' 
import { SALES_COLUMNS } from '../config/columns'
import { TABLE_OPTIONS } from '../config/options'

export const useTableData = (data: Sale[]) => {
  const columns = useMemo(() => SALES_COLUMNS, [])

  const tableOptions = {
    ...TABLE_OPTIONS,
    columns,
    data,
  }

  return { tableOptions }
}