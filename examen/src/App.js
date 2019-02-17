import React, { Component } from 'react';
import './App.css';
import { base } from './base.json';
import Navbar from './Navbar';
import Orden from './Orden';
import { Container, Grid, Header } from 'semantic-ui-react'
import Menu from './Menu'
import ListaProducto from './ListaProducto'
import ListaCarrito from './ListaCarrito'
import Search from './Search';
class App extends Component {

    constructor(props){
      super(props)
      this.state = { 
        products: base,
        openOrder: false,
        total: 0,
        sum: 0,
        cart: []
      }
      this.handleSaveProduct = this.handleSaveProduct.bind(this)
    this.handlerAddProduct = this.handlerAddProduct.bind(this)
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this)
    this.handlerOpenOrder = this.handlerOpenOrder.bind(this)
    this.handlerClearCart = this.handlerClearCart.bind(this)
    }

    handlerClearCart() {
      this.setState({
        cart: [],
        sum: 0,
        total: 0
      });
    }
  
    sumProducts(array) {
      var total = 0
      array.forEach(product => total += product.order)
      this.setState({total: total})
    }
  
    sumTotal(array) {
      var sum = 0
      array.forEach(product => sum += product.total)
      this.setState({sum: sum})
    }
  
    handlerAddProduct(indexCart, indexProduct){
      var statusCopy = Object.assign({}, this.state);
      if (statusCopy.products[indexProduct].status !== 0) {
        statusCopy.cart[indexCart].total += statusCopy.cart[indexCart].price
        statusCopy.cart[indexCart].order += 1
        statusCopy.products[indexProduct].status -= 1
        this.setState(statusCopy)
        this.sumProducts(statusCopy.cart)
        this.sumTotal(statusCopy.cart)
      } else {
        alert('Producto inexistente')
      }
    }
  
    handlerRemoveProduct(productId) {
      let product = this.state.products.find(p => p.id === productId);
      let indexProduct = this.state.products.findIndex(x => x.id === product.id)
      let cart = this.state.cart.find(p => p.id === productId)
      let indexCart = this.state.cart.findIndex(x => x.id === cart.id)
  
      var statusCopy = Object.assign({}, this.state);
      if(statusCopy.cart[indexCart].total === statusCopy.cart[indexCart].price ){
        indexCart !== -1 && statusCopy.cart.splice( indexCart, 1 );
        this.setState(statusCopy)
        alert('El producto fue eliminado del carrito de compras')
      } else {
        statusCopy.cart[indexCart].total -= statusCopy.cart[indexCart].price
        statusCopy.products[indexProduct].status += 1
        statusCopy.cart[indexCart].order -= 1
        statusCopy.total -= 1
        statusCopy.sum -= statusCopy.cart[indexCart].precio
        this.setState(statusCopy)
      }
    }
  
    handleSaveProduct(productId) {
      let product = this.state.products.find(p => p.id === productId);
      let indexProduct = this.state.products.findIndex(x => x.id === product.id)
  
      var productCart = {
        id: product.id,
        name: product.marca,
        img: product.imglink,
        price: product.precio,
        order: 1,
        total: product.precio
      }
  
      var exist = this.state.cart.find(p => p.id === productId)
      if (undefined !== exist && exist !== null) {
        let indexCart = this.state.cart.findIndex(x => x.id === exist.id)
        this.handlerAddProduct(indexCart, indexProduct)
      }else{
        var statusCopy = Object.assign({}, this.state);
        statusCopy.products[indexProduct].status -= 1
        this.sumProducts(statusCopy.cart)
        this.sumTotal(statusCopy.cart)
        this.setState({
          cart: this.state.cart.concat([productCart]),
          statusCopy
        })
      }
    }
  
    handlerOpenOrder(event) {
      event.preventDefault()
      this.setState({ openOrder: true })
    }
  
    renderOpenOrder() {
      if (this.state.openOrder) {
        return (
          <Orden
            sum={this.state.sum}
            onClearCart={this.handlerClearCart}
          />
        )
      }
    }

  render() {
    return (
      <div className = "App">
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
