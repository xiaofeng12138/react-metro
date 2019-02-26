import React, { Component } from 'react';
import Header from '../header/index'
import Banner from '../banner/index'
import Nav from '../nav/index'
import News from '../news/index'
import Recommend from '../recommend/index'
import Station from '../station/index'
class Home extends Component{
    render(){
        return ( 
             <div className ='home'>
                <Header/>
                <Banner/>
                <Nav/>
                <Recommend/>
                <Station/>
                <News/>
            </div>
        )
    }
}
export default Home;