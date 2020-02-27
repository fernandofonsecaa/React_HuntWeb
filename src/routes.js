import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main'
import Product from './pages/product'

const Routes = () =>(
    <BrowserRouter>  {/* Define que está utilizando as rotas através do Browser */}
        <Switch>    {/* Permite que apenas uma única rota seja chamada ao mesmo tempo */} 
            <Route exact path="/" component = { Main }/> {/* Definindo a primeira rota, o componente a ser exibido nesta rota é o Main*/}
            <Route path="/products/:id" component = { Product }/>
        </Switch>
    </BrowserRouter>
)

export default Routes;