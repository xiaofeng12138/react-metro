import React, { Component } from 'react';
import './index.scss'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class Nav extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        Axios.get('http://106.15.185.178/metroPhp/php.php?title=nav').then((res)=>{
           this.setState({
               data:res.data
           })
        })
    }
    render(){
        return ( 
             <div className ='nav'>
              <ul>
                  {
                      this.state.data.length>0 &&(
                        this.state.data.map((item,index)=>{
                            return(
                                <li key={item.id}>
                                    <Link to="/">
                                      <img src={item.picUrl} alt={item.alt}/>
                                    </Link>
                                </li>
                            )
                        })
                      )
                  }
                  {/* <li><a href="/"><img src={require('./img/1.jpg')} alt=""/></a></li>
                  <li><a href="/"><img src={require('./img/2.jpg')} alt=""/></a></li>
                  <li><a href="/"><img src={require('./img/1.jpg')} alt=""/></a></li>
                  <li><a href="/"><img src={require('./img/2.jpg')} alt=""/></a></li>
                  <li><a href="/"><img src={require('./img/1.jpg')} alt=""/></a></li>
                  <li><a href="/"><img src={require('./img/2.jpg')} alt=""/></a></li>
                  <li><a href="/"><img src={require('./img/1.jpg')} alt=""/></a></li>
                  <li><a href="/"><img src={require('./img/2.jpg')} alt=""/></a></li> */}
                  
              </ul>
            </div>
        )
    }
}
export default Nav;