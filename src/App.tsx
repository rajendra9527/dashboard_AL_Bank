import React from 'react';
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";
import './App.css';
import Layout from './Components/Layout';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Ministatement from './Bank_Transctions/Ministatement';
import DepositWithdraw from './Bank_Transctions/DepositWithdraw';



function App() {


    return <Router>
        <Layout
            header={<Header />}
            sidebar={<Sidebar />}
        >

            <Switch>
                <Route path="/BankTransaction"> mini statement </Route>
                <Route path="/depositwithdraw"> deposit/withdraw </Route>
            </Switch>

        </Layout>
    </Router>
}

export default App;