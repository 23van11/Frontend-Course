import { useParams } from 'react-router-dom';

const citas = [
  { id: 1, paciente: "Ana Torres", fecha: "2025-09-10", motivo: "Chequeo general" },
  { id: 2, paciente: "Carlos Méndez", fecha: "2025-09-12", motivo: "Dolor de cabeza" },
  { id: 3, paciente: "Lucía Fernández", fecha: "2025-09-15", motivo: "Control post-operatorio" },
];

function CitaDetalle() {
  const { id } = useParams();
  const cita = citas.find((c) => c.id === parseInt(id));

  if (!cita) {
    return <p>Cita no encontrada.</p>;
  }

  return (
    <div>
      <h2>Detalles de la Cita</h2>
      <p><strong>ID:</strong> {cita.id}</p>
      <p><strong>Paciente:</strong> {cita.paciente}</p>
      <p><strong>Fecha:</strong> {cita.fecha}</p>
      <p><strong>Motivo:</strong> {cita.motivo}</p>
    </div>
  );
}

export default CitaDetalle;
