import React, { Component } from 'react';
import './index.scss'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class News extends Component{
  state={
        data:[]
    }

     componentDidMount(){
         Axios.get('http://106.15.185.178/metroPhp/php.php?title=news').then((res)=>{
           this.setState({
               data:res.data
           })
        })   
    }
    render(){
        return ( 
             <div className ='news'>
                <div className='n-top'>
                    <div className='n-t-left'>
                    <span>地铁资讯</span>
                    </div>
                    <div className='n-t-right'>
                    <span>查看更多</span>
                    <i className='iconfont icon-icon1'></i>
                    </div>
                </div>
               {
                      this.state.data.length>0 &&(
                        this.state.data.map((item,index)=>{
                            return(
                                <div className='n-mid' key={item.id}>
                                    <Link to="/">
                                        <img src={item.picUrl} alt=""/>
                                    </Link>
                                    <p>{item.title}</p>
                                    <span>站务宣传</span>
                                </div>
                            )
                        })
                      )
                  }
                {/* <div className='n-mid'>
                  <a href="/">
                    <img src={require('./img/1.jpg')} alt=""/>
                  </a>
                  <p>如何赢取大都会APP限量版大红包攻略</p>
                    <span>站务宣传</span>
                </div>
                <div className='n-mid'>
                    <a href="/">
                      <img src={require('./img/2.jpg')} alt=""/>
                    </a>
                    <p>【1周年啦！Metro大都会刷吗过闸机】</p>
                      <span>站务宣传</span>
                    </div>
                <div className='n-mid'>
                    <a href="/">
                      <img src={require('./img/3.jpg')} alt=""/>
                    </a>
                    <p>【匆匆又一年，往事不如烟】</p>
                      <span>站务宣传</span>
                </div> */}
            </div>
        )
    }
}
export default News;