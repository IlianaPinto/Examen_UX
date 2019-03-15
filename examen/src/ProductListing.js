import React from 'react'
import ProductListItem from './ProductListItem';

function ProductListing(props){
    return <div>     
        {
        props.base.map( base => 
        <ProductListItem 
            product={base}
            addToCart={props.addToCart} 
            ></ProductListItem>)}        
    </div>
}

function mapStateToProps(state){
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload : item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payoad: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)