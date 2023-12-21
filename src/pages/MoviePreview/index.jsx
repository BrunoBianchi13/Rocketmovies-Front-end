import { Container } from './styles'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/Ai'
import { AiOutlineStar } from 'react-icons/Ai'
import { BiArrowBack } from 'react-icons/Bi'
import { IoTimeOutline } from 'react-icons/io5'


import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Stars } from '../../components/Stars'

export function MoviePreview(){
  
  return(

    
    <Container>
      <Header></Header>
      <main>

        <div className="container">
          <Link to="/"><BiArrowBack/><a href="">Voltar</a></Link> 

          <div className="had">
            <div><h1>The Marvels</h1></div>
            <div>
              <Stars icon={AiFillStar}></Stars>
              <Stars icon={AiFillStar}></Stars>
              <Stars icon={AiFillStar}></Stars>
              <Stars icon={AiFillStar}></Stars>
              <Stars icon={AiOutlineStar}></Stars>
            </div>
          </div>


            <p><img src="https://avatars.githubusercontent.com/u/108348636?v=4" alt="" /> Por Bruno Bianchi <IoTimeOutline/>13/10/2023 ás 13:31</p>

            <Tag title={"Horror"}></Tag><Tag title={"Horror"}></Tag><Tag title={"Horror"}></Tag>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

        </div>
        
      </main>
      
    </Container>
    
  )
}