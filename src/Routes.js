import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

import AddContact from './components/addContact/AddContact'
import ContactsList from './components/contactsList/ContactsList';
import EditTodo from './components/editTodo/EditTodo'
import Home from './components/home/Home';
import {history} from './helpers/history';

const Routes = () => {
    console.log('routes')
    return (
        <BrowserRouter history={history}>
            <Switch>

                <Route  exact path="/" component={Home} />
                <Route  exact path="/add" component={AddContact} />
                <Route  exact path="/list" component={ContactsList} />
                <Route  exact path="/edit" component={EditTodo} />
                
            </Switch>

        </BrowserRouter>
    );
};

export default Routes;