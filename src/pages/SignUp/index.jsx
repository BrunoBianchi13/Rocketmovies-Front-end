import { ContainerLeft, ContainerRight } from './styles'
import { FiMail } from 'react-icons/fi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { IoArrowBackSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { RxAvatar } from 'react-icons/rx'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignUp(){
  
  return(
    <div>
       <ContainerLeft>
        <h1>RocketMovies</h1>
        <h5>Aplicação para acompanhar tudo que assistir.</h5>
        <h3>Crie sua conta</h3>
        <form >

        <Input
          placeholder="Nome"
          type="text"
          icon={RxAvatar}
          
        />
        
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={RiLockPasswordFill}
        />

        <Button
          title="Entrar"
        />
        </form>
        
        

        <Link to="/"><IoArrowBackSharp/>Voltar para o login</Link>
        

      </ContainerLeft>
      <ContainerRight>
        
      </ContainerRight>
      
    </div>
   
    
  )
}