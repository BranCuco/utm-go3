import React from "react";
import './page.css';

const MenuSecretaria: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Menú Secretaria</h1>
        <img src="https://www.freepik.es/fotos-vectores-gratis/secretaria" alt="Menú Secretaria" className="w-full max-w-lg mb-4" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-bold mb-2">Sección de Justificaciones</h2>
          <ul>
            <li>Justificar ausencia</li>
            <li>Justificar tardanza</li>
            <li>Justificar salida anticipada</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-bold mb-2">Reportes Generados</h2>
          <ul>
            <li>Reporte de asistencia</li>
            <li>Reporte de puntualidad</li>
            <li>Reporte de justificaciones</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuSecretaria;
