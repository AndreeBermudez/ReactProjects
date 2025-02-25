import { Card } from "./Card/Card";
import pedidos from "./Card/pedidos";

export const MainCocina = () => {
  
  return (
    <>
      <main className="container bg-white rounded-3 flex-grow-1 mb-3">
        <section className="row mx-4">
          <article className="col-12 my-3">
            <h2>Lista de pedidos</h2>
            <p className="fw-semibold subtitulo">
              Pedidos listados según orden de llegada
            </p>
          </article>

          <section className="col-12">
            <div className="d-flex justify-content-between flex-wrap">
              {pedidos.map((pedido) => (
                <Card key={pedido.id} pedido={pedido} />
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
};
