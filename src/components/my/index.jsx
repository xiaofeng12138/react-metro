import React, { Component } from 'react';
import './index.scss'

class My extends Component{
    render(){
        return ( 
             <div className ='my'>
               <div className='m-header'>
                 <div className='m-h-left'>
                   <li><img src={require('./img/my.jpg')} alt=""/></li>
                   <p>晓风哥哥</p>
                 </div>
                 <div className='m-h-right'>
                  <span><i className='iconfont icon-shezhi'></i></span>
                 </div>
               </div>
               <div className='myList'>
                  <ul>
                    <li>
                      <i className='iconfont icon-qianbao'> <span>我的钱包</span></i>
                      <i className='iconfont icon-icon1 ml-right'></i>
                    </li>
                    <li>
                      <i className='iconfont icon-qiajuanfafangguanli'> <span>卡卷包</span></i>
                      <i className='iconfont icon-icon1 ml-right'></i>
                    </li>
                    <li>
                      <i className='iconfont icon-wujiaoxing'> <span>我的收藏</span></i>
                      <i className='iconfont icon-icon1 ml-right'></i>
                    </li>
                    <li>
                      <i className='iconfont icon-tixing'> <span>出行提醒</span></i>
                      <i className='iconfont icon-icon1 ml-right'></i>
                    </li>
                    <li>
                      <i className='iconfont icon-kefu'> <span>智能客服</span></i>
                      <i className='iconfont icon-icon1 ml-right'></i>
                    </li>
                    <li>
                      <i className='iconfont icon-shanghaiditie'> <span>关于大都会</span></i>
                      <i className='iconfont icon-icon1 ml-right'></i>
                    </li>
                    <li>
                      <i className='iconfont icon-pingfen'> <span>去评分</span></i>
                      <i className='iconfont icon-icon1 ml-right'></i>
                    </li>
                  </ul>
               </div>
            </div>
        )
    }
}
export default My;