import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom'

class Map extends Component{
    
   componentDidMount() {
        // 百度地图API功能
        let {BMap,BMAP_STATUS_SUCCESS} = window
        var map = new BMap.Map("allmap");
	    var point = new BMap.Point(116.331398,39.897445);
	    map.centerAndZoom(point,12);

        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                //alert('您的位置：'+r.point.lng+','+r.point.lat);
            }
            else {
                alert('failed'+this.getStatus());
            }        
        },{enableHighAccuracy: true})
    }
    render(){
        return ( 
            <div className='map1'>
            <div className='map' id="allmap"></div>
                <div className='xf'>
                    <div className='line'>
                    <div className='line-left'>
                        <ul>
                            <li> 
                                <i></i>
                                <span>我的位置</span>
                            </li>
                            <li> 
                                <i className='green'></i>
                                <span className='green1'>设置终点</span>
                            </li>
                        </ul>
                    </div>
                    <div className='line-right'>
                    <i className='iconfont icon-wangfan'></i>
                    </div>
                    </div>
                    <div className='introduce'>
                      <span>
                          <i className='iconfont icon-jia-'></i>
                          <p>家</p>
                      </span>
                      <span>
                          <i className='iconfont icon-gongsi'></i>
                          <p>去公司</p>
                      </span>
                      <div className='span'>
                         搜索
                      </div>
                 </div>
                    <div className='details'>
                     <ul>
                         <li>
                             <Link to="/">
                                 <i className='iconfont icon-liebiao'></i>
                                 <p> 线路列表</p>
                             </Link>
                         </li>
                         <li>
                             <Link to="/">
                                 <i className='iconfont icon-shanghaiditie2'></i>
                                 <p> 车站信息</p>
                             </Link>
                         </li>
                         <li>
                             <Link to="/">
                                 <i className='iconfont icon-xinfeng'></i>
                                 <p> 致歉信</p>
                             </Link>
                         </li>
                         <li>
                             <Link to="/">
                                 <i className='iconfont icon-weishengjian'></i>
                                 <p> 卫生间</p>
                             </Link>
                         </li>
                     </ul>
                </div>
                </div>
                
                
            </div>
        )
    }
}
export default Map;