import { useParams, Navigate } from "react-router-dom";
import data from "../../data/logements.json";

export default function Accommodation() {
  const { id } = useParams();
  const logement = data.find((l) => l.id === id);

  // Contrainte : si l'id n'existe pas -> 404
  if (!logement) return <Navigate to="/404" replace />;

  return (
    <div>
      {/* Tu implémenteras la galerie, tags, hôte, rating, collapses plus tard */}
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
    </div>
  );
}
