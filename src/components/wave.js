import React from "react"
import './wave.css'


class Wave extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle() {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() {
        let footerStyle = {}
        if(this.props.disable){
            footerStyle = {
                fontSize: '20px',
                paddingTop: '100px'
            }
        }
        return (
            <div className = 'wave-container' style = {{position: 'relative', bottom: this.props.bottom}}>
                <div className = 'wave-header' style = {{backgroundImage: `url(${this.props.url})`, color: this.props.headerColor, ...footerStyle}} onClick = {this.handleToggle}>
                    {this.props.title}
                </div>
                {
                    this.state.toggle && !this.props.disable && 
                    <div className = 'wave-content' style = {{backgroundColor: this.props.bgcolor}}>
                        {this.props.children}
                    </div>
                }
            </div>
        )
    }
}

export default Wave