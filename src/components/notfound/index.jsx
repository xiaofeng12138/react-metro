import React, {Component } from 'react';
import './index.scss'

class Notfound extends Component{
   state = {
        seconds: 3
    }
    tick = () => {
        const { seconds } = this.state;
        this.setState({
            seconds: seconds - 1
        })
         if(this.state.seconds === 0){
              this.props.history.push('/')
            clearInterval(this.interval);
            }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    render(){
        return(
           <div className='not'>
             <img src={require('./img/404.jpg')} alt=""/>
             <p>咦~页面不见了~</p>
             <p>{this.state.seconds}秒后跳转到主页</p>
           </div>
        )
    }
}
export default Notfound;