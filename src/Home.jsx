import { Add } from '@mui/icons-material'
import List from './List'
import React from 'react'
import styled from 'styled-components'

const WorkArea = styled.div`
    background-color: white;
    width: 100%;
    padding : 20px;
    
`

const Header = styled.div`
    
`
const NewContent = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    
`
const TextBox = styled.div`
    
`

const LinkInput = styled.div`
    display: flex;
    padding: 10px 0px;
    
`
const LinkText = styled.span`
    flex: 1;
    color: black;
    `

const DescTextArea = styled.textarea`
    flex: 4;
    background-color: #ededed;
    border: transparent;
    
`    

const Input = styled.input`
    flex: 4;
    background-color: #ededed;
    border: transparent;
    
`
const Footer = styled.div`
    
    text-align: right;
    display: flex;
    justify-content: end;
    
`
const Button = styled.button`
    cursor: pointer;
    border: transparent;
    font-size: 20px;
    padding: 5px;

    &:hover{
        background-color: #aaaaaa;
    }
    display: flex;
    align-items: center;
    
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    
`

const Home = ({listData}) => {
  return (
    <WorkArea>
        <Header>  
            <NewContent>
                <TextBox>
                    <LinkInput>
                        <LinkText>
                            Link
                        </LinkText>
                        <Input />
                    </LinkInput>
                    <LinkInput>
                        <LinkText>
                            Description
                        </LinkText>
                        <DescTextArea rows="4"/>
                    </LinkInput>
                </TextBox>
                <Footer>
                    <Button>
                        <Add/>
                    </Button>
                </Footer>
            </NewContent>
        </Header>
        <Content>
            <List listData={listData} />
        </Content>
    </WorkArea>
  )
}

export default Home