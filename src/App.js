import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'

import CartList from '../src/components/cartpage/Cart'

function App() {
  return (
    <BrowserRouter>
  
    <div>
      <Link to="/"></Link>
      <Link to="/cart">Cart</Link>

      <Route path="/cart" component={CartList} exact={true}/>
      </div>
      </BrowserRouter>
    
  );
}

export default App;
