import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Home from './Home'
import Read from './Read'
import { BrowserRouter  as Router, Route, Switch  } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

const Section = styled.div`
    background-color: white;
    width: 50vw;
    height: 100vh;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
`

export default class App extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            currPage : "Home",
            loading: false,
            listData : [
                {
                    date: "13/10/2022",
                    boxData : [
                        {
                            link: "www.google.com",
                            desc: "google"
                        },
                        {
                            link: "www.youtube.com",
                            desc: "Time to watch fun videos"
                        }
                    ]
                }, 
                {
                    date: "11/10/2022",
                    boxData : [
                        {
                            link: "https://en.wikipedia.org/wiki/HMS_Gloucester_(1654)",
                            desc: "Read about HMS Glocuster The Commonwealth navy supported the regime in several ways. It assisted in defeating Royalists who threatened English maritime trade, reducing the threat from Royalist-sponsored privateers to commerce, and deterring them by the increased power and size of the fleet. It played a central role in the recapture of the Isles of Scilly, the Channel Islands, and the Isle of Man, where important royalist privateering bases existed."
                        },
                        {
                            link: "https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/",
                            desc: "its all fun in geeks for geeks ( for whom )!"
                        }
                    ]
                }
            ]
        }
    }

    setCurrPage(newPage,callback) {

        if(callback===undefined){
            this.setState({
                currPage: newPage
            });
        }else {
            this.setState({
                currPage: newPage
            }, callback);
        }
    }

    render() {
        return (
            <Router>
                <Wrapper>
                    <Section>
                        <Navbar currPage={this.state.currPage}  setCurrPage={this.setCurrPage.bind(this)} /> 
                            <Switch>
                                <Route exact path="/read">
                                    <Read listData = {this.state.listData}/>
                                </Route>
                                <Route exact path="/">
                                    <Home listData = {this.state.listData}/>
                                </Route>
                            </Switch> 
                    </Section>
                </Wrapper>
            </Router>
            )
    }
}


