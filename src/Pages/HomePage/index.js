import React, { useState } from 'react'
import './style.css'
import { Switch, Route, useParams } from 'react-router-dom'
import Header from '../../Components/Header'
import MainHome from './MainHome'
import { useLocation } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Feedback from '../../Components/Feedback'
import PortfolioPage from '../PortfolioPage'
import Detail from '../Detail'
import AdidasHome from '../AdidasHome'
import NikeHome from '../NikeHome'
import AsicsHome from '../AsicsHome'
import CartPage from '../CartPage'
import LoginPage from '../LoginPage'
import SigUpPage from '../SigUpPage'
import Page404 from '../Page404'



const HomePage = () => {

    return (
        <div className="page">
            <Header />

            <Feedback />
            <div className='home-page'>


                <Switch>
                    <Route exact path="/sigup" >
                        <SigUpPage />
                    </Route>
                    <Route exact path="/login" >
                        <LoginPage />
                    </Route>
                    <Route exact path="/asics" >
                        <AsicsHome />
                    </Route>
                    <Route exact path="/cart" >
                        <CartPage />
                    </Route>
                    <Route exact path="/adidas" >
                        <AdidasHome />
                    </Route>
                    <Route exact path="/nike" >
                        <NikeHome />
                    </Route>
                    <Route exact path="/portfolio" >
                        <PortfolioPage />
                    </Route>
                    <Route exact path={`/detail/:id`} >
                        <Detail />
                    </Route>
                    <Route exact path="/" >
                        <MainHome />
                    </Route>
                    <Route exact path="" >
                        <Page404 />
                    </Route>
                </Switch>


            </div>

            <Footer />
        </div>
    )
}
export default HomePage