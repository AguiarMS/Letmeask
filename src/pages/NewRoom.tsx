import IllustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import '../styles/auth.scss'
import { Button } from "../components/Button";
import { useAuth } from '../hooks/useAuth';



export function NewRoom() {
  const { user } = useAuth()


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
          <h1>{user?.name}</h1>
          <h2>Cria uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />

            <Button type="submit">Criar sala</Button>

          </form>
          <p>
            Quer entrar em uma sala existente? <Link to='/'>Clique Aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )

}