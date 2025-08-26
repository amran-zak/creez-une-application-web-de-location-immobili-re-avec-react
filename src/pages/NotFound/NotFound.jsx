import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{textAlign: "center", padding: "64px 0"}}>
      <h1 style={{fontSize: 96, margin: 0}}>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}
