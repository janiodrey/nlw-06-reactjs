import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";

import ilustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIcon from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

export const Home = () => {
  let navigate = useNavigate();

  function navigateToNewRoom() {
    navigate("rooms/new");
  }

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

          <button className="create-room" onClick={navigateToNewRoom}>
            <img src={googleIcon} alt="logo da Google" />
            Crie sua sala com Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};
