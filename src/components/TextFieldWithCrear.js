import React from 'react';
import {TextField,IconButton} from '@material-ui/core';

class TextFieldWithCrear extends React.Component{
    state = {
        value: ''
    };
    render() {
        return (
            <div>
                <TextField {...this.props.input}
                           value={this.state.value}
                           type={this.props.type}
                           placeholder={this.props.placeholder}/>
                ({!this.state.value} <IconButton onClick={() => this.props.input.onChange(null)}/>)
            </div>
        );
    };
}
export default TextFieldWithCrear;