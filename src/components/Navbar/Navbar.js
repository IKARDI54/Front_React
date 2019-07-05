import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, popo) => {
    this.setState({ activeItem: popo })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='PRODUCTOS'
          active={activeItem === 'PRODUCTOS'}
          onClick={this.handleItemClick}
        >
          PRODUCTOS
        </Menu.Item>

        <Menu.Item
          name='QUIENES SOMOS'
          active={activeItem === 'QUIENES SOMOS'}
          onClick={this.handleItemClick}
        >
          QUIENES SOMOS
        </Menu.Item>

        <Menu.Item
          name='CONTACTO'
          active={activeItem === 'CONTACTO'}
          onClick={this.handleItemClick}
        >
          CONTACTO
        </Menu.Item>
      </Menu>
    )
  }
}

