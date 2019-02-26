import React,{Component} from 'react';
import './index.scss';
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/js/swiper.min.js'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'


class Banner extends Component{
    state={
        data:[]
    }

     play() {
         var mySwiper = new Swiper('.swiper-container', {
                pagination: {
                el: '.swiper-pagination',
        },
            //可选选项，自动滑动
            autoplay: true,
            autoplay: {
            delay: 2000,//2秒切换一次
        },
            loop : true,
        })
    }
    
    componentDidMount(){
         Axios.get('http://106.15.185.178/metroPhp/php.php?title=banner').then((res)=>{
           this.setState({
               data:res.data
           })
           this.play();
        })   
    }
   render(){
        return(
        <div className='banner'>
           <div className='swiper-container'>
            <ul className='swiper-wrapper'>
                 {
                      this.state.data.length>0 &&(
                        this.state.data.map((item,index)=>{
                            return(
                                <li className='swiper-slide' key ={item.id}>
                                   <Link to="/">
                                    <img src={item.picUrl} alt={item.alt}/>
                                    </Link>
                                </li>
                            )
                        })
                      )
                  }
               {/* <li className='swiper-slide'><a href="/"> <img src={require('./img/1.jpg')} alt=""/></a></li>
               <li className='swiper-slide'><a href="/"> <img src={require('./img/2.jpg')} alt=""/></a></li>
               <li className='swiper-slide'><a href="/"> <img src={require('./img/3.jpg')} alt=""/></a></li>
               <li className='swiper-slide'><a href="/"> <img src={require('./img/4.jpg')} alt=""/></a></li>
               <li className='swiper-slide'><a href="/"> <img src={require('./img/5.jpg')} alt=""/></a></li> */}
            </ul>
            <div className="swiper-pagination"></div>
          </div>
        </div> 
        )
    }
}
export default Banner;