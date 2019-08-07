import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CompanyContextProvider from './contexts/CompanyContext';
import UserContextProvider, { UserContext } from './contexts/UserContext';
import AuthContextProvider from './contexts/AutnContext';
import StatisticContextProvider from './contexts/StatisticContext';


const bhistory = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter history={bhistory}>
      <CompanyContextProvider>
          <UserContextProvider> 
            <AuthContextProvider>
               <StatisticContextProvider>
                <App />
                </StatisticContextProvider>
            </AuthContextProvider>   
          </UserContextProvider>
      </CompanyContextProvider>    
    </BrowserRouter>  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
