import { MRT_TableOptions } from 'material-react-table'
import { Sale } from '../../../../../interfaces' 

export const TABLE_OPTIONS: Partial<MRT_TableOptions<Sale>> = {
  enableRowSelection: true,
  enableColumnOrdering: true,
  enableGlobalFilter: false,
  initialState: {
    density: 'compact',
  },
  muiTablePaperProps: {
    elevation: 0,
  },
}