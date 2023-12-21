import { Container } from './styles'

import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/Ai'
import { AiOutlineStar } from 'react-icons/Ai'
import { AiOutlinePlus } from 'react-icons/Ai'


import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Stars } from '../../components/Stars'
export function Home(){
  
  return(

    
    <Container>
      <Header></Header>


        <main>
          
            <div className="had">
              <div><h1>Meus Filmes</h1></div>
              <Link to="/createMovie">
                <div><h1><Button to="/createMovie" icon={AiOutlinePlus} title="Adicionar Filme"/></h1></div>
              </Link>
            </div>
          
      
          
          


          <div className="movies">
          <Link to="/moviePreview/:id">
              <Section  title={"The Marvels"}>
                <Stars icon={AiFillStar}></Stars>
                <Stars icon={AiFillStar}></Stars>
                <Stars icon={AiFillStar}></Stars>
                <Stars icon={AiFillStar}></Stars>
                <Stars icon={AiOutlineStar}></Stars>
              
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
                <Section>
                  <Tag title={"Horror"}></Tag>
                  <Tag title={"Horror"}></Tag>
                  <Tag title={"Horror"}></Tag>
                </Section>
                
              </Section>
            </Link>
          
          </div>
          <div className="movies">
          <Link to="/moviePreview/:id">
              <Section  title={"The Marvels"}>
                <Stars icon={AiFillStar}></Stars>
                <Stars icon={AiFillStar}></Stars>
                <Stars icon={AiFillStar}></Stars>
                <Stars icon={AiFillStar}></Stars>
                <Stars icon={AiOutlineStar}></Stars>
              
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
                <Section>
                  <Tag title={"Horror"}></Tag>
                  <Tag title={"Horror"}></Tag>
                  <Tag title={"Horror"}></Tag>
                </Section>
                
              </Section>
            </Link>
          </div>
          <div className="movies">
          <Link to="/moviePreview/:id">
              <Section  title={"The Marvels"}>
                <Stars icon={AiFillStar}></Stars>
                <Stars icon={AiFillStar}></Stars>
                <Stars icon={AiFillStar}></Stars>
                <Stars icon={AiFillStar}></Stars>
                <Stars icon={AiOutlineStar}></Stars>
              
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
                <Section>
                  <Tag title={"Horror"}></Tag>
                  <Tag title={"Horror"}></Tag>
                  <Tag title={"Horror"}></Tag>
                </Section>
                
              </Section>
            </Link>
          </div>
        </main>
        


       
       


      
    </Container>
    
  )
}