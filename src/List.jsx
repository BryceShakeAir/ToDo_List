import React from 'react'
import styled from 'styled-components'

import Box from './Box'

const Wrapper = styled.div`
    
    display: flex;
    flex-direction: column;

`

const DayWrapper = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 30px;

`

const Date = styled.div`
    background-color: white;
    text-align: center;
    padding: 10px 0px;
    width: 20%;
    font-weight: 500;
    font-size: 30px;
    text-align: left;
`

const ContentWrapper = styled.div`

    margin-top: 20px;
    display: flex;
    flex-direction: column;
`


const List = ({listData}) => {
    
    function genCode () {
        var listCode = [];
        
        for(var i=0;i < listData.length; i++ ){
            var listDataItem = listData[i];
 
            listCode.push( <Date> {listDataItem.date}  </Date> );
            
            var boxCode = [] ;
            for(var j = 0; j < listDataItem.boxData.length; j++ ){
                var boxDataItem = listDataItem.boxData[j];
                boxCode.push( <Box link= {boxDataItem.link} desc= {boxDataItem.desc} />);
            }

            listCode.push( <ContentWrapper> {boxCode} </ContentWrapper>);
        }
        console.log(listCode);
        return listCode;
    } 

  return (
    <Wrapper>
        <DayWrapper>

            {  genCode() }

        </DayWrapper>

    </Wrapper>
  )
}

export default List