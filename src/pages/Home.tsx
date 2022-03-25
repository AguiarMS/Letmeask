import IllustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'
import GoogleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import EnterRoomIcon from '../assets/images/enter-room.png'
import { Button } from "../components/Button"
import { useNavigate } from 'react-router-dom'
import { firebase, auth } from '../services/firebase'



export function Home() {

  const navigate = useNavigate()

  function handleCreateRoom(){
    const provider = new firebase.auth.GoogleAuthProvider()

    auth.signInWithPopup(provider).then(result => {
      console.log(result)
    })
    
    navigate('/rooms/new')
  }


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
          <button className='create-room' onClick={handleCreateRoom}>
            <img src={GoogleIconImg} alt="" />
            Crie sua sala com o Google
          </button>
          <div className='separator'>
            ou entre em uma sala
          </div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />

            <Button type="submit">
              <img src={EnterRoomIcon} alt="Icone no botão entrar na sala" />
              Entrar na sala
            </Button>

          </form>
        </div>
      </main>
    </div>
  )

}