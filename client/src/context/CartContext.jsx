import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'

const CartContext=createContext(undefined)

export  function CartProvider({children}){

    const[items,setItems] = useState(()=>{
        const saved = localStorage.getItem('app-cart')
        return saved ? JSON.parse(saved):[]
    })

    const[isCartOpen , setIsCartOpen] = useState(false)

    useEffect(()=>{
        localStorage.setItem('app-cart',JSON.stringify(items))
    },[items])

    const addToCart = (product,quantity=1)=>{
        setItems((prev)=>{
            // const existing = prev.filter((item)=> item.product._id === product._id)
            const existing = prev.find(
                (item) => item.product._id === product._id
              );

            if(existing){
                return prev.map((item)=>(item.product._id === product._id ? {...item,quantity: item.quantity + quantity} : item))
            }

            return [...prev,{product,quantity}]
        })
    }

    const removeFromCart = (productId)=>{
        setItems((prev)=>prev.filter((item)=> item.product._id !== productId))
    }

    const updateQuantity = (productId, quantity)=>{
        if(quantity<=0){
            return removeFromCart(productId)
        }
        setItems((prev)=> prev.map((item)=>(item.product._id === productId ? {...item,quantity}:item)))
    }

    const clearCart=()=>{
        setItems([])
        setIsCartOpen(false)
    }

    const cartCount = items.reduce((sum,item)=>(sum + item.quantity),0)

    const cartTotal = items.reduce((sum,item)=>(sum + item.product.price * item.quantity),0)

    return(
        <CartContext.Provider value={{
            items,
            setItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartCount,
            cartTotal,isCartOpen,setIsCartOpen

        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext);
    if(!context){
        throw new Error('useCart must be used within CartProvider')
    }

    return context;
}