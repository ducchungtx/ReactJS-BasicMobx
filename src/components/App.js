import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MyStore from '../store';

class App extends Component {

    changeText() {
        MyStore.myData = 'Hello there!';
    }

    resetText() {
        MyStore.myData = 'Hello world';
    }

    render() {
        return (
            <div className="App">
                <div>{ MyStore.myData }</div>
                <div onClick={this.changeText}>Click to change</div>
                <div onClick={this.resetText}>Click to reset</div>
            </div>            
        );
    }
}

export default observer(App);
