import { HeaderCocina } from "./cocina/HeaderCocina"
import { MainCocina } from "./cocina/MainCocina"

export const Cocina = () => {

  let date = 'Chimbote, 09 de octubre del 2024'
  let area = 'Area de Cocina'

  return (
    <>
    <div className="container-fluid bg-principal min-vh-100 d-flex flex-column">
      <HeaderCocina fecha={date} title={area} />
      <MainCocina />
    </div>
    </>
  )
}

