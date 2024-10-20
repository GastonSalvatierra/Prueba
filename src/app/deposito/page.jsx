const Page = () => {
    return (
      <div>
        {/* Gestión de pedidos */}
        <div className="container mt-4">
          <h1 className="text-center text-bg-dark">Gestión de pedidos</h1>
          <div className="row">
            <div className="col-md-4">
              <a href="deposito/pen-aut" className="text-decoration-none">
                <div className="p-3 mb-3 bg-light text-center text-dark hover-pointer item-gestion ">
                  <h5>Pendientes de autorización</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="deposito/pen-arm" className="text-decoration-none">
                <div className="p-3 mb-3 bg-light text-center text-dark hover-pointer item-gestion">
                  <h5>Pendiente de armado</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="deposito/gestionados" className="text-decoration-none">
                <div className="p-3 mb-3 bg-light text-center text-dark hover-pointer item-gestion">
                  <h5>Pedidos gestionados</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="deposito/consulta" className="text-decoration-none">
                <div className="p-3 mb-3 bg-light text-center text-dark hover-pointer item-gestion">
                  <h5>Consulta</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="/path/to/gestion-r11?param=x"
                className="text-decoration-none"
              >
                <div className="p-3 mb-3 bg-light text-center text-dark hover-pointer item-gestion">
                  <h5>Gestión-R11</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="/path/to/consulta-r11?param=x"
                className="text-decoration-none"
              >
                <div className="p-3 mb-3 bg-light text-center text-dark hover-pointer item-gestion">
                  <h5>Consulta-R11</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
  
        {/* Gestión de facturas */}
        <div className="container mt-4">
          <h1 className="text-center text-bg-dark">Gestión de facturas</h1>
          <div className="row">
            <div className="col-md-6">
              <a
                href="/facturacion"
                className="text-decoration-none"
              >
                <div className="p-3 mb-3 bg-light text-center text-dark hover-pointer item-gestion">
                  <h5>Carga de facturas</h5>
                </div>
              </a>
            </div>
            <div className="col-md-6">
              <a
                href="******"
                className="text-decoration-none"
              >
                <div className="p-3 mb-3 bg-light text-center text-dark hover-pointer item-gestion">
                  <h5>Consulta de facturas</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
  
        {/* Gestión de stock */}
        <div className="container mt-4">
          <h1 className="text-center text-bg-dark">Gestión de stock</h1>
          <div className="row">
            <div className="col-md-6">
              <a href="/stock" className="text-decoration-none">
                <div className="p-3 mb-3 bg-light text-center text-dark hover-pointer item-gestion">
                  <h5>Consulta</h5>
                </div>
              </a>
            </div>
            <div className="col-md-6">
              <a
                href="/path/to/movimiento-producto?param=x"
                className="text-decoration-none"
              >
                <div className="p-3 mb-3 bg-light text-center text-dark hover-pointer item-gestion">
                  <h5>Movimiento por producto</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Page;
  