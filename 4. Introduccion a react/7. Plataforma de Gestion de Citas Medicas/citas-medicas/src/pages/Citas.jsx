import { Link } from 'react-router-dom';

const citas = [
  { id: 1, paciente: "Ana Torres", fecha: "2025-09-10" },
  { id: 2, paciente: "Carlos Méndez", fecha: "2025-09-12" },
  { id: 3, paciente: "Lucía Fernández", fecha: "2025-09-15" },
];

function Citas() {
  return (
    <div>
      <h2>Lista de Citas Médicas</h2>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>
              {cita.paciente} - {cita.fecha}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
