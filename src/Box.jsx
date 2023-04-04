import { Check, Delete } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    padding : 10px 0px;
`
const ContentItem = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-bottom: 15px;
    width : 100%;
    background-color:white;
    

`

const ContentBox = styled.div`
    
    display: flex;
    padding-bottom: 10px;   
`


const BoxText = styled.div`
    flex: 4;
`

const BoxLink = styled.a`
    flex: 4;
    color: black;
    font-weight: 500;
    font-size: 20px;
    
`

const ContentButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    margin-left: 20px;
    
`

const ContentButton = styled.button`
    height: 35px;
    width: 35px;
    background-color: ${(props)=>props.backgroundColor};
    border-radius: 50%;
    border: 0px;
    padding: 12px;
    cursor: pointer;
    margin-left: 25px;    
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: #aaaaaa;
    }
`

const Box = (props) => {
  return (
    <Wrapper>

        <ContentItem>
            <ContentBox>
                
                <BoxLink href={"//"+props.link}  target="_blank" rel="noopener noreferrer">
                    {props.link}
                </BoxLink>
            </ContentBox>
            <ContentBox>
                
                <BoxText>
                    {props.desc}
                </BoxText>
            </ContentBox>
        </ContentItem>
        <ContentButtons>
        
            <ContentButton backgroundColor="#ededed" >
                <Check style={{
                    height: "30px",
                    width: "30px",
                    color: "black"
                }}/>
            </ContentButton>
            <ContentButton backgroundColor="#ededed">
                <Delete style={{
                    height: "20px",
                    width: "20px",
                    color: "black"

                }}/>
            </ContentButton>
        </ContentButtons>
        
    </Wrapper>
  )
}

export default Box