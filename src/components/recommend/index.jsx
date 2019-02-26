import React, { Component } from 'react';
import './index.scss'

class Recommend extends Component{
    render(){
        return ( 
             <div className ='recommend'>
             <ul>
                 <li>
                     <a href="/">
                       <img src={require('./img/1.jpg')}alt=""/>
                    </a>
                </li>
                 <li>
                     <a href="/">
                       <img src={require('./img/2.jpg')}alt=""/>
                    </a>
                </li>
                 <li>
                     <a href="/">
                       <img src={require('./img/3.jpg')}alt=""/>
                    </a>
                </li>
                 <li>
                     <a href="/">
                       <img src={require('./img/4.jpg')}alt=""/>
                    </a>
                </li>
                 <li>
                     <a href="/">
                       <img src={require('./img/5.jpg')}alt=""/>
                    </a>
                </li>
                 <li>
                     <a href="/">
                       <img src={require('./img/6.jpg')}alt=""/>
                    </a>
                </li>
             </ul>
            </div>
        )
    }
}
export default Recommend;