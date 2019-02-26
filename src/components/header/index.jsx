import React, { Component } from 'react';
import './index.scss'

class Header extends Component{
    render(){
        return ( 
             <div className ='header'>
             <div className='h-left'>
               <img src={require('./img/location.jpg')} alt=""/>
             </div>
             <div className='h-logo'>
               <img src={require('./img/logo.jpg')} alt=""/>
             </div>
             <div className='h-right'>
                <span>晴5℃</span>
                <span className='iconfont icon-taiyang'></span>
                <span className='iconfont icon-tongzhi'></span>
             </div>
            </div>
        )
    }
}
export default Header;