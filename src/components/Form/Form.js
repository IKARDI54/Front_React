import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import Tabla from '../../components/Table/Table.js'



export default class Formulario extends Component {

    constructor(props) {
        super(props)
        this.state = {
          value: '',
          products: []
        }
    
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
      }
    
      componentDidMount(){
        this.fetchDataProduct()
      }

      fetchDataProduct(){
        const self = this
        axios.get('https://todo-list-back-55.herokuapp.com/api/product')
        .then(function (response) {
          const products = response.data.products
          self.setState({ products: products })

          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      }

      handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
    
        this.setState({
          [name]: value
        })
      }
    
      handleSubmit(event) {
        const { producto, precio, foto, description } = this.state

        axios.post('https://todo-list-back-55.herokuapp.com/api/product', {
            name: producto,
            price: precio,
            picture: foto,
            description: description
          })
          .then(function (response) {
            console.log(response)
          })
          .then( () => this.fetchDataProduct())
          .catch(function (error) {
            console.log(error)
          })

        event.preventDefault()
      }

      handleDelete(event) {
        const { borrar } = this.state
        axios.delete('https://todo-list-back-55.herokuapp.com/api/product/' + borrar)
          .then(function (response) {
            console.log(response)
          })
          .then( () => this.fetchDataProduct())
          .catch(function (error) {
            console.log(error)
          })
        event.preventDefault()
      }

     

 render() {
     const { products } = this.state
     return (
        <Form>
          <Form.Field>
            <label>Nombre del Producto</label>
            <input name="producto" onChange={this.handleInputChange} placeholder='Escribe el nombre del producto' />
          </Form.Field>
          <Form.Field>
            <label>Precio</label>
            <input name="precio" onChange={this.handleInputChange} placeholder='Escribe el precio' />
          </Form.Field>
          <Form.Field>
            <label>Fotografía</label>
            <input name="foto" onChange={this.handleInputChange} placeholder='Introduce la url' />
          </Form.Field>
          <Form.Field>
            <label>Descripcion del producto</label>
            <input name="description" onChange={this.handleInputChange} placeholder='Describe el producto' />
          </Form.Field>
          <Button onClick={this.handleSubmit} type='submit'>CREAR</Button>
          <Form.Field>
            <label>Borrar por ID</label>
            <input name="borrar" onChange={this.handleInputChange} placeholder='Introduce ID' />
          </Form.Field>
          <Button onClick={this.handleDelete} type='submit'>BORRAR</Button>
          <Tabla products={products}/>
        </Form>         
      )
     
 }
}