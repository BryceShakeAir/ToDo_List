import React from 'react'
import styled from 'styled-components'
import List from './List'

const WorkArea = styled.div`
    background-color: white;
    height: 100%;
    width: 100%;
    padding : 20px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    
`

const Read = ({listData}) => {
  return (
    <WorkArea>
        <Content>
            <List listData={listData}/>
        </Content>
    </WorkArea>
  )
}

export default Read