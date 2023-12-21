import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.header`

  grid-area: header;
  display:flex;
  align-items: center;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid black;

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
  background: #1C1B1E;
  

  
`

export const Logo = styled( Link )`
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 64px;
`


export const Profile = styled( Link )`
  display: inline-flex;
  align-items: center;
  
  

  > img{
    width: 64px;
    height: 64px; 
    border-radius: 50%;
    border: 1px solid #3E3B47;
    background: #000;
    
  }

  >.info{
    display: flex;
    flex-direction: column;
    margin-left: 64px;
    line-height:24px;
    
  }
  > .info span{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 9px;
    
  }
  > .info strong{
    color: #948F99;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
  }

`
