import { Select } from "../../../../components/ui/Select" 

const invoiceTypes = [
  { value: 'ticket', label: 'Ticket' },
  { value: 'invoice', label: 'Boleta' }
]

export const InvoiceTypeSection = () => {
  return (
    <Select
      label="Tipo de comprobante"
      options={invoiceTypes}
    />
  )
}