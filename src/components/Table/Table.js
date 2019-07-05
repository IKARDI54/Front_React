import React, {Component} from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import axios from 'axios'

 
class Tabla extends Component{ 




    
    render(){
        const { products } = this.props

        return (
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>ID</Table.HeaderCell>
                  <Table.HeaderCell>Nombre</Table.HeaderCell>
                  <Table.HeaderCell>Precio</Table.HeaderCell>
                  <Table.HeaderCell>Foto</Table.HeaderCell>
                  <Table.HeaderCell>Descripcion</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
          
                <Table.Body>
                    { products.map( pr => {
                       return <Table.Row>
                           <Table.Cell>{pr._id}</Table.Cell>
                            <Table.Cell>{pr.name}</Table.Cell>
                            <Table.Cell>{pr.price}</Table.Cell>
                            <Table.Cell>{pr.picture}</Table.Cell>
                            <Table.Cell>{pr.description}</Table.Cell>
                        </Table.Row>
                    })}
                   
                </Table.Body>
            </Table>)
    }
}
export default Tabla

