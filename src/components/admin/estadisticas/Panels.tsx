import React from "react";
import {
  BsChatSquareDotsFill,
  BsListTask,
  BsCart,
  BsQuestionCircleFill,
  BsArrowRight,
} from "react-icons/bs";

export const Panels = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="card text-white bg-primary mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <BsChatSquareDotsFill size={64} />
              </div>
              <div className="flex-grow-1 text-end">
                <h3 className="card-title">1</h3>
                <p className="card-text">Conciertos activos</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <a href="#" className="text-white">
              <span>Ver Detalles</span>
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card text-white bg-success mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <BsListTask size={64} />
              </div>
              <div className="flex-grow-1 text-end">
                <h3 className="card-title">2</h3>
                <p className="card-text">Conciertos totales</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <a href="#" className="text-white">
              <span>Ver Detalles</span>
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card text-dark bg-warning mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <BsCart size={64} />
              </div>
              <div className="flex-grow-1 text-end">
                <h3 className="card-title">3</h3>
                <p className="card-text">Tickets vendidos</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <a href="#" className="text-dark">
              <span>Ver Detalles</span>
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card text-white bg-danger mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <BsQuestionCircleFill size={64} />
              </div>
              <div className="flex-grow-1 text-end">
                <h3 className="card-title">4</h3>
                <p className="card-text">Ventas exitosas</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <a href="#" className="text-white">
              <span>Ver Detalles</span>
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
