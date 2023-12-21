import { Container, Profile, Logo } from './styles'
import { Input } from '../../components/Input'

import { Link } from 'react-router-dom'


export function Header() {
  return (
    <Container>
        <Logo to="/">RocketMovies</Logo>
      <Input
        placeholder="Pesquise pelo titulo"
      ></Input>
      <Profile to="/profile">
        <div className='info'>
            <span>Bruno Bianchi</span>
            <strong>sair</strong> 
        </div>
          <img src="https://avatars.githubusercontent.com/u/108348636?v=4" alt="" />
      </Profile>
      
      
      
      
      
    </Container>
  )
}
