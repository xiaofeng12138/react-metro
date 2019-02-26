import React, { Component } from 'react';
import './index.scss';
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/js/swiper.min.js'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import { Link } from 'react-router-dom'

class Discovery extends Component{
 componentDidMount(){
      var mySwiper = new Swiper('.swiper-container', {
           
            loop : true,
        })
 }

    render(){
        return ( 
             <div className='discovery'>
                <p>发现</p>
                <div className='swiper-container'>
                        <ul className='swiper-wrapper'>
                            <li className='swiper-slide'><Link to="/"> <img src={require('./img/1.jpg')} alt=""/></Link></li>
                            <li className='swiper-slide'><Link to="/"> <img src={require('./img/2.jpg')} alt=""/></Link></li>
                            <li className='swiper-slide'><Link to="/"> <img src={require('./img/3.jpg')} alt=""/></Link></li>
                    </ul>
                    <div className="swiper-pagination"></div>
                </div>
                <div className='d-cotegory'>
                  <ul>
                      <li>
                           <Link to="/">
                           <span> <i className='iconfont icon-redian'></i></span>
                           <p>精选</p>
                           </Link>
                      </li>
                       <li>
                           <Link to="/">
                           <span> <i className='iconfont icon-wenhua'></i></span>
                           <p>文化</p>
                           </Link>
                      </li>
                       <li>
                           <Link to="/">
                           <span> <i className='iconfont icon-xiangji-'></i></span>
                           <p>游玩</p>
                           </Link>
                      </li>
                       <li>
                           <Link to="/">
                           <span> <i className='iconfont icon-zhoubiancantingcanpanfandianguogaixianxing'></i></span>
                           <p>寻味</p>
                           </Link>
                      </li>
                       <li>
                           <Link to="/">
                           <span> <i className='iconfont icon-bianlidian'></i></span>
                           <p>探店</p>
                           </Link>
                      </li>
                  </ul>
                </div>
                <div className='d-recommend'>
                  <Link to="/">
                    <img src={require('./img/4.jpg')} alt=""/>
                  </Link>
                </div>
                <div className='d-aqiyi'>
                 <p>爱奇艺精选频道</p>
                 <ul>
                     <li>
                         <img src={require('./img/5.jpg')} alt=""/>
                         <span>地球之读城“如皋”</span>
                    </li>
                    <li>
                         <img src={require('./img/6.jpg')} alt=""/>
                         <span>采访“卫龙”夫妇</span>
                    </li>
                 </ul>
                </div>
                <div className='d-travel'>
                 <ul>
                     <li><img src={require('./img/7.jpg')} alt=""/></li>
                     <li><img src={require('./img/8.jpg')} alt=""/></li>
                 </ul>
                </div>
        </div>
        )
    }
}
export default Discovery;