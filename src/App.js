import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

import './App.css';
import TextFieldWithClear from './components/TextFieldWithCrear';

class App extends Component {

    state = {
        textValue: null
    };

    handleChange = (event,value) => this.setState({textValue:value});

    render() {
        return (
            <form>
                <Field
                    name="value"
                    onChange={this.handleChange}
                    component={TextFieldWithClear}
                />
              <p>{this.state.textValue}</p>
            </form>
        );
    }
}
App = reduxForm({
    form:"clear"
})(App);
export default App;
