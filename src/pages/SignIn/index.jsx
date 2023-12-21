import { ContainerLeft, ContainerRight } from './styles'
import { Link } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignIn(){
  
  return(


    
    <div>
       <ContainerLeft>
        <h1>RocketMovies</h1>
        <h5>Aplicação para acompanhar tudo que assistir.</h5>
        <h3>Faça seu login</h3>
        <form >
        
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
        
        

        <Link to="/signUp"> Criar conta</Link>
        

      </ContainerLeft>
      <ContainerRight>
        
      </ContainerRight>
      
    </div>
   
    
  )
}