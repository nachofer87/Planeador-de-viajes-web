import micro from "../assets/micro.png";
import avion from "../assets/avion.png";
import coche from "../assets/coche.png";

export default function Inicio() {
  return (
    <main className="inicio">
      <section className="seccion-viajes">
        <h1 className="titulo-seccion"> Próximos viajes </h1>
        <div className="grid-viajes">
          <div className="tarjeta-viaje">
            <div className="contenido-viaje">
              <div className="icono-transporte"> 
                <img src={avion} alt="Avión" height="24" width="24"/> 
              </div>

              <div className="info-viaje">
                <div className="nombre-viaje"> París </div>

                <div className="fecha-viaje"> 12 - 20 dic 2026 </div>
              </div>

              <div className="dias-restantes"> 18 días </div>
            </div>
          </div>

          <div className="tarjeta-viaje">
            <div className="contenido-viaje">
              <div className="icono-transporte"> 
                <img src={micro} alt="Micro" height="24" width="24"/> 
              </div>

              <div className="info-viaje">
                <div className="nombre-viaje"> Bariloche </div>

                <div className="fecha-viaje"> 5 - 12 ene 2027 </div>
              </div>

              <div className="dias-restantes">42 días </div>
            </div>
          </div>

          <div className="tarjeta-viaje">
            <div className="contenido-viaje">
              <div className="icono-transporte"> 
                <img src={coche} alt="Coche" height="24" width="24"/> 
              </div>

              <div className="info-viaje">
                <div className="nombre-viaje"> Costa Atlántica </div>

                <div className="fecha-viaje"> 15 - 19 feb 2027  </div>
              </div>

              <div className="dias-restantes">83 días </div>
              </div>
          </div>

          <div className="nuevo-viaje">
            <div className="nuevo-icono"> + </div>
          </div>
        </div>
      </section>


      <div className="linea-divisora"></div>


      <section className="seccion-viajes">
        <h2 className="titulo-seccion"> Viajes anteriores </h2>
        <div className="grid-viajes">
          <div className="tarjeta-viaje anterior">
            <div className="contenido-viaje">
              <div className="icono-transporte"> 
                <img src={avion} alt="Avión" height="24" width="24"/> 
              </div>

              <div className="info-viaje">
                <div className="nombre-viaje"> Roma </div>

                <div className="fecha-viaje">  10 - 17 oct 2023 </div>
              </div>

              <div className="completado"> Completado </div>
            </div>
          </div>

          <div className="tarjeta-viaje anterior">
            <div className="contenido-viaje">
              <div className="icono-transporte"> 
                <img src={avion} alt="Avión" height="24" width="24"/> 
              </div>

              <div className="info-viaje">
                <div className="nombre-viaje"> Nueva York </div>

                <div className="fecha-viaje"> 2 - 9 ago 2023 </div>
              </div>

              <div className="completado"> Completado </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}