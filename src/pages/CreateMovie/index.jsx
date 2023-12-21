import { Container } from './styles'
import { Link } from 'react-router-dom'

import { BiArrowBack } from 'react-icons/Bi'


import { Button } from '../../components/Button'
import { Button2 } from '../../components/Button2'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Item } from '../../components/Item'


export function CreateMovie(){
  
  return(

    
    <Container>
      <Header></Header>
      <main>

        <div className="container">

          <Link to="/"><BiArrowBack/><a href="">Voltar</a></Link> 
          

        <div className="had">
            <div><h1>Novo filme</h1></div>
        </div>

        <form >

          <div className="info">
            <Input Placeholder="Título"></Input>
            <Input Placeholder="Sua nota (de 0 a 5)"></Input> 
          </div>
          
          <Textarea placeholder="Describe yourself here..."></Textarea>

          <Section title={"Marcadores"}>
            <div className="marc">
            <Item value={"aaaa"}/>
            <Item Placeholder="Novo Marcador"isNew />
            </div>
          </Section>


          <div className="info">
            <Button2 title={"Excluir filme"}></Button2>
            <Button title={"Salvar alterações"}></Button>
          </div>
          
        </form>

        </div>
        
      </main>
      
    </Container>
    
  )
}