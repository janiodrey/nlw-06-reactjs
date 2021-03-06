import { Link } from "react-router-dom";

import { Button } from "../components/Button";

import ilustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import "../styles/auth.scss";

export const NewRoom = () => {
  return (
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="" />
        <strong>Crie uma sala de Q&amp;A ao vivo</strong>
        <p>Tire dúvida da sua audiencia em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />

          <h2>Criar uma nova sala</h2>

          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>

          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
};
