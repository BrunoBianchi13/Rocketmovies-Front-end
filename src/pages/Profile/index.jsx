import { Container } from './styles'

import { Button } from '../../components/Button'
import { HeaderB } from '../../components/HeaderB'
import { Input } from '../../components/Input'
import { AiOutlineCamera } from 'react-icons/Ai'
import { FiMail } from 'react-icons/fi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { RxAvatar } from 'react-icons/rx'
export function Profile(){
  
  return(

    
    <Container>
      <HeaderB></HeaderB>
      <main>
      <img src="https://avatars.githubusercontent.com/u/108348636?v=4" alt="" />
      <div className="up"><AiOutlineCamera/></div>



        <Input
          placeholder="Nome"
          icon={RxAvatar}
        ></Input>
        <Input
          placeholder="E-mail"
          icon={FiMail}
        ></Input>
        <Input
          placeholder="Senha Atual"
          icon={RiLockPasswordFill}
        ></Input>
        <Input
          placeholder="Nova Senha"
          icon={RiLockPasswordFill}
        ></Input>

        <Button title={"Salvar"}></Button>
      </main>
      

    </Container>
    
  )
}