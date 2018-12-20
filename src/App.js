import React, { Component } from 'react';
import {checkInvalidMessage} from './services/validation';
import {splitMessage} from './services/splitMessage';
import './styles/bootstrap.css';

class App extends Component {
  state = {
    value: '',
    messageList: [],
    error: ''
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    if (checkInvalidMessage(event.target.value)) {
      this.setState({error: 'word should be less than 50 character'})
    } else {
      this.setState({error: ''})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.error) {
      const splitValue = splitMessage(this.state.value);

      if (splitValue.msgType === 'string') {
        this.setState({messageList: [...this.state.messageList, splitValue.msgValue]})
      }
  
      if (splitValue.msgType === 'array') {
        this.setState({messageList: [...this.state.messageList, ...splitValue.msgValue]})
      }

      this.setState({value: ''});
    }
  }

  render() {
    const {messageList, error} = this.state;
    return (
      <div className="container mt-4">
        <div className="list-group">
          <div className="list-group-item list-group-item-action active">
            List of messages
          </div>
          {messageList.map((msg, key) =>
            <div key={key} className="list-group-item list-group-item-action">{msg}</div>
          )}
          {messageList.length === 0 && <div className="list-group-item list-group-item-action text-center text-primary">No message to show</div>}
        </div>

        <div className="mt-3">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="font-weight-bold">Add message</label>
              <input type="text"
                className={`form-control ${error ? 'is-invalid' : ''}`}
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Type message to post..."/>
              {error && <div class="invalid-feedback">{error}</div>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
