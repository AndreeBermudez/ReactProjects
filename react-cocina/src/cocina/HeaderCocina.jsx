export const HeaderCocina = ({fecha,title}) => {
  return (
    <>
      <header className="container bg-principal">
        <div className="row align-items-center">
          <div className="col-12 my-4 d-flex justify-content-between align-items-center">
            <div className="container-header titulos">
              <h3>Bienvenido, {title}</h3>
            </div>
            <div className="container-header titulos fw-semibold">
              <p>
                <i className="bi bi-calendar"></i> {fecha}
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
