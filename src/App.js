import React, {Component} from 'react';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>

                <Input submitFn={(value) => {
                    alert(value);
                }}
                       />
                {/*<List todos={[]}/>*/}
            </div>
        );
    }
}

export default App;
