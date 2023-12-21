import { Container } from "./style";



export function Stars({ icon: Icon, ...rest }){

  return(
    <Container>
      {Icon && <Icon size={20} />}
    </Container>
  )
 
  
}