import micro from "../assets/micro.png";
import avion from "../assets/avion.png";
import coche from "../assets/coche.png";

import Tarjeta from "../components/Tarjetas/Tarjeta";
import NuevoViaje from "../components/NuevoViaje/NuevoViaje";

import { useState } from "preact/hooks";

export default function Inicio() {
  const [proximosViajes, setProximosViajes] = 
  useState([]);

  const [formularioAbierto, setFormularioAbierto] =
  useState(false);

  const viajesAnteriores = [
    {
      nombre: "Roma",
      fecha: "10 - 17 oct 2023",
      icono: avion,
    },

    {
      nombre: "Nueva York",
      fecha: "2 - 9 ago 2023",
      icono: avion,
    },
  ];

  function agregarViaje(viajeNuevo) {
    setProximosViajes(prev => [
      ...prev,
      viajeNuevo,
    ]);
  }

  return (
    <main className="inicio">
      <section className="seccion-viajes">
        <h1 className="titulo-seccion">
          Próximos viajes
        </h1>

        <div className="grid-viajes">
          {
            proximosViajes.map((viaje) => (
              <Tarjeta
                key={viaje.nombre}
                nombre={viaje.nombre}
                fecha={viaje.fechaFormateada || viaje.fecha}
                dias={viaje.dias}
                icono={viaje.icono}
              />
            ))
          }

          <div className="nuevo-viaje" onClick={() => setFormularioAbierto(true)}>
            <div className="nuevo-icono">
              +
            </div>
          </div>
        </div>
      </section>
        <NuevoViaje
          abierto={formularioAbierto}
          cerrar={() => setFormularioAbierto(false)}
          agregarViaje={agregarViaje}
        />
      <div className="linea-divisora"></div>

      <section className="seccion-viajes">
        <h2 className="titulo-seccion">
          Viajes anteriores
        </h2>

        <div className="grid-viajes">
          {
            viajesAnteriores.map((viaje) => (
              <Tarjeta
                key={viaje.nombre}
                nombre={viaje.nombre}
                fecha={viaje.fecha}
                icono={viaje.icono}
                completado={true}
              />
            ))
          }
        </div>
      </section>
    </main>
  );
}