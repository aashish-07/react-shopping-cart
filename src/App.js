import React from 'react';
import './index.css'
import data from './data.json'
import Products from './components/Products';
class App extends React.Component{
    constructor(){
      super();
      this.state = {
        products : data.products,
        size: "",
        sort: "",
      };
    }
    render(){
    return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <Products products={this.state.products}></Products>
        </div>
        <div className="sidebar">
            cart items
        </div>
      </main>
      <footer>
        ALL rights reserved
      </footer>
    </div>
  );}
  
}

export default App;
