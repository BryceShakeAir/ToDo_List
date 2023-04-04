import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.div`
    background-color: white;
    
    width: 100%;
    display: flex;
    align-items: left;
    flex-direction: row;
    
    padding-top: 30px;
`
const MenuItem = styled.div`
    
    cursor: pointer;
    color: black;
    margin: 0px 20px 0px 20px;
    text-align: start ;
    padding: 10px;
    font-weight: 600;
    font-size: 25px;
    border-bottom: ${ (props) => (props.highlight && "3px solid black") };
    &:hover {
        background-color: #ededed;
    }
    
`
const Navbar = ( { currPage , setCurrPage } ) => {

   var history = useHistory();  
   function onClickFn(clickedPage, history) {
    
        if( clickedPage !== currPage ){
            
            setCurrPage(clickedPage, 
                ( ) => { 
                    if(clickedPage==="Home")
                        history.push("/");
                    else
                        history.push("/read");
                    
                } 
            );   
        };
    
        return clickedPage;  
    }  
  return (
    <Menu>
            <MenuItem highlight = {currPage==="Home"} onClick={() => onClickFn("Home",history)} >
                    Home
            </MenuItem>
            <MenuItem highlight = {currPage==="Read"} onClick={() => onClickFn("Read",history)} >
                    Read
            </MenuItem>
    </Menu>
    
  )
}

export default Navbar