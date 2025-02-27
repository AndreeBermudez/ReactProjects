import { Select } from "../../../../components/ui/Select" 

const paymentOptions = [
  { value: 'cash', label: 'Efectivo' },
  { value: 'credit', label: 'Tarjeta de crédito' },
  { value: 'transfer', label: 'Transferencia' },
  { value: 'yape', label: 'Yape' }
]

export const PaymentSection = () => {
  return (
    <Select
      label="Método de pago"
      options={paymentOptions}
    />
  )
}