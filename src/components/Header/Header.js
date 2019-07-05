import React, {Component} from 'react'
import logo from '../../img/logo.png'
import './header.css'
    
class Header extends Component{
    render(){
        return (
            <div>
                <header class="header">
                    <h1>
                        <img class="logois" src={logo} alt="Israel Logo" />
                    </h1>
                </header>
            </div>
        )
    }
}

export default Header