import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'tachyons';

import Sidebar from './containers/Sidebar';
import HomePageEn from './containers/HomepageEn';
import HomePage from './containers/Homepage';
import Cegtortenet from './components/Cegtortenet';

import Progism from './containers/Progism';
import ChmBau32 from './components/Chm-bau32';
import SunArch from './components/SunArch';
import SunArch1 from './components/SunArch1';
import SunArch2 from './components/SunArch2';
import SunArch3 from './components/SunArch3';
import Hocsere from './components/Hocsere';
import Hurkolt from './components/Hurkolt';
import IsoBau from './components/IsoBau';
import Gasnet32 from './components/GasNet32';
import WaterNet32 from './components/WaterNet32';
import Legforgalom from './components/Legforgalom';

let lang = document.documentElement.lang

class App extends Component {
    constructor(props){
        super(props)
        console.log(lang);
    }
    render() {
        return (
            <Router>
                <Sidebar >
                    <Route exact={true} path="/" component={this.Home} />
                    <Route path='/public/cegtortenet.html' component={() =>(<Cegtortenet/>)} />
                    <Route path='/public/ww32.html' component={() =>(<Cegtortenet/>)}  />

                    <Route path='/public/progism.html' component={() =>(<Progism lang={lang}/>)}  />
                    <Route path='/public/chmbau32.html' component={() =>(<ChmBau32/>)}  />
                    <Route path='/public/SunArch.html' component={() =>(<SunArch lang={lang}/>)}  />
                    <Route path='/public/SunArch1.html' component={() =>(<SunArch1 lang={lang}/>)}  />
                    <Route path='/public/SunArch2.html' component={() =>(<SunArch2 lang={lang}/>)}  />
                    <Route path='/public/SunArch3.html' component={() =>(<SunArch3 lang={lang}/>)}  />
                    <Route path='/public/Hocsere.html' component={() =>(<Hocsere lang={lang}/>)}  />
                    <Route path='/public/Hurkolt.html' component={() =>(<Hurkolt lang={lang}/>)}  />
                    <Route path='/public/IsoBau.html' component={() =>(<IsoBau lang={lang}/>)}  />
                    <Route path='/public/GasNet32.html' component={() =>(<Gasnet32 lang={lang}/>)}  />
                    <Route path='/public/WaterNet32.html' component={() =>(<WaterNet32 lang={lang}/>)}  />
                    <Route path='/public/Legforgalom.html' component={() =>(<Legforgalom lang={lang}/>)}  />
                </Sidebar>
            </Router>
        )
    }

    Home(){
        lang = document.documentElement.lang
        return (lang === 'hun')? <HomePage/> : <HomePageEn/>;
    }
}

export default App;
    