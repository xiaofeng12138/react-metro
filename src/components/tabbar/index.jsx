import React, { Component } from 'react';
import './index.scss'
import { Link } from 'react-router-dom'

class Tabbar extends Component{
    render(){
        return ( 
             <div className ='tabbar'>
             <ul>
                 <li>
                     <Link to="/">
                       <img src={require('./img/1.jpg')} alt=""/>
                     </Link>
                </li>
                <li>
                     <Link to='/map'>
                       <img src={require('./img/2.jpg')} alt=""/>
                     </Link>
                </li>
                <li className='mid'>
                      <Link to='/not'>
                       <img src={require('./img/5.jpg')} alt=""/>
                     </Link>
                </li>
                <li>
                     <Link to='/discovery'>
                       <img src={require('./img/3.jpg')} alt=""/>
                     </Link>
                </li>
                <li>
                     <Link to='/my'>
                       <img src={require('./img/4.jpg')} alt=""/>
                     </Link>
                </li>
             </ul>
            </div>
        )
    }
}
export default Tabbar;