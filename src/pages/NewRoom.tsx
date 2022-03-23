import IllustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'
import GoogleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from "../components/Button";



export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img src={IllustrationImg} alt="Ilustração perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={LogoImg} alt="Letmeask" />
          <h2>Cria uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />

            <Button type="submit">Criar sala</Button>

          </form>
          <p>
            Quer entrar em uma sala existente? <a href='#'>Clique Aqui</a>
          </p>
        </div>
      </main>
    </div>
  )

}