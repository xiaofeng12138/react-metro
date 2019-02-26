import React, { Component } from 'react';
import './index.scss'

class Station extends Component{
    render(){
        return ( 
             <div className ='station'>
             <span>附近站点</span>
             <div className='s-content'>
               <div className='s-top'>
                 <div className='s-t-left'>
                  <i className='iconfont icon-location'></i>
                  <p>江宁路</p>
                 </div>
                  <div className='s-t-right'>
                  <span className='span1'><i className='iconfont icon-riqi'></i> </span>
                 <span className='span2'><i className='iconfont icon-erweima'></i> </span>
                 </div>
               </div>
               <div className='s-mid'>
                    <div className='s-m-left'>
                     <span className='to'>开往</span>
                     <span className='arrive'>张江路</span>
                    </div>
                    <div className='s-m-mid'>
                     <i className='iconfont icon-xiangzuo'></i>
                     <span className='line'>13号线</span>
                     <i className='iconfont icon-icon1'></i>
                    </div>
                    <div className='s-m-right'>
                     <span className='to'>开往</span>
                     <span className='arrive'>金运路</span>
                    </div>
               </div>
               <div className='s-mid'>
                    <div className='s-m-left'>
                     <span className='to'>列车到达</span>
                     <span className='arrive'>调试中</span>
                    </div>
                    <div className='s-m-mid'>
                     <span className='line1'>13</span>
                    </div>
                    <div className='s-m-right'>
                     <span className='to'>列车到达</span>
                     <span className='arrive'>调试中</span>
                    </div>
               </div>
               <div className='s-bot'>
                <ul>
                    <li className='time'>
                        <i className='iconfont icon-shizhong'></i>
                        <span>时刻表</span>
                    </li>
                    <li>
                        <i className='iconfont icon-zhandian'></i>
                        <span>站点设施</span>
                    </li>
                    <li className='outbound'>
                        <i className='iconfont icon-icon_chuzhanshenqing'></i>
                        <span>出站信息</span>
                    </li>
                </ul>
               </div>
             
             </div>
            </div>
        )
    }
}
export default Station;