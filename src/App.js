import React, { Component } from 'react';

import './App.css';
import EmojiTextBox from './EmojiTextBox';


class App extends Component {
  render() {
    const obj = {
      foo: {
        bar: {
          baz: 42,
        },
      },
    };
    const baz = obj?.foo?.bar?.baz; 
    console.log(baz);
    return (
      <div className="App">
          <h1>Hello Emojis! <span role='img' aria-label='emoji'>👋</span></h1>
          <EmojiTextBox />
      </div>
    );
  }
}

export default App;
