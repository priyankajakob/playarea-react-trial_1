import React from 'react'

export default class CartList extends React.Component {
    constructor(){
        super()
        this.state = {
            products : [{id:111,name:"Adidas Shoes 456ER",count:0},{id:222,name:"Libas Straight Kurti",count:0},{id:333,name:"Tupperware bottle",count:0}]
        }
    }
   
    handlePlus=(id)=>{
        const products = JSON.parse(JSON.stringify(this.state.products))
        const product = products.find(product=>product.id===id)
        products[products.indexOf(product)].count+=1
        this.setState({products})
    }

    handleMinus=(id)=>{
        const products = JSON.parse(JSON.stringify(this.state.products))
        const product = products.find(product=>product.id===id)
        if(product.count>0){
            products[products.indexOf(product)].count-=1
            this.setState({products})
        }
    }

    handleRemove=(id)=>{
        const confirm = window.confirm("Are you sure that you want to remove this product?")
        if(confirm){
            this.setState((prevState)=>({
                products : prevState.products.filter(product=>product.id!==id)
            }))
        }
    }
    handleReset=(id)=>{
        this.setState((prevState)=>({
            products: prevState.products.map(product=>{
                product.count=0
                return product
            })
        }))
    }

    render(){
        return (
            <div>
                <h2>Your Cart.....</h2>
                <button onClick={this.handleReset}>RESET</button>
                {this.state.products.map(product=>{
                    return (
                        <div key={product.id}>
                            <p>{product.name}</p>
                            <p>{product.count}</p>
                            <button onClick={()=>{
                                this.handlePlus(product.id)
                            }}>
                            +
                            </button>
                            <button onClick={()=>{
                                this.handleMinus(product.id)
                            }}>
                            -
                            </button>
                            <button onClick={()=>{
                                this.handleRemove(product.id)
                            }}>
                            Delete
                            </button>
                        </div>
                    )
                })}
                

            </div>
        )
    }
}