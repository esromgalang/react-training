import React, {Component} from 'react';

class Life extends Component {
    //1 get default props

    // 2 set set default state
    state = {
        title:'Life Cycles',
        alt: 'es'
    }
    // 3 before render
    componentWillMount(){
        console.log('Before Render')
    }

    //Happening before a change in component
    componentWillUpdate(){
        console.log('Before Update')
    }

    //Happened after a changed in component
    componentDidUpdate(){
        console.log('After Update')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextState);
        return true;
    }

    componentWillReceiveProps(){
        console.log('BEFORE RECEIVE PROPS')
    }

    componentWillUnmount(){
        console.log('UNMOUNT')
    }

    // 4 render jsx
    render(){
        console.log(this.props)
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={() => this.setState(
                    {
                        title:'something else'
                    }
                )}>
                    CLICK TO CHANGE
                </div>

                <div on></div>
            </div>
        )
    }

    // 5 after jsx
    componentDidMount(){
        console.log('After JSX')
    }
}

export default Life;