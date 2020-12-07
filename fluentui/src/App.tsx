import React, {useState} from 'react';
import './App.css';
import {CalendarInline} from './components/CalendarInline';
import {TextFieldBasic} from './components/TextFieldBasic';
import {ModalBasic} from "./components/ModalBasic";


interface AppProps {
}

function App({}: AppProps) {
    return (
        <div>
            <div className="App">
                <CalendarInline/>
            </div>
            <div>
                <TextFieldBasic/>
            </div>
            <div>
                <ModalBasic/>
            </div>
        </div>
    );
}

export default App;
