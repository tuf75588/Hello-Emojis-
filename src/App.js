import React, { Component } from 'react';
import EmojiContext from './EmojiContext';
import EmojiTextBox from './EmojiTextBox';
import './App.css';
import emojiJSON from 'emoji.json'
class App extends Component {
  render() {
    const obj = {
      foo: {
        bar: {
          baz: 42
        }
      }
    };
    const baz = obj?.foo.bar?.baz;
    const emojis = emojiJSON.reduce((emojis, emoji) => {
     
      emoji.keywords.split('|').map(keyword => {
        return emojis[keyword.trim()] = emoji.char
      })
      return emojis
    }, {})
    console.log(emojis);
    return (
      <div className="App">
        <h1>
          Hello Emojis!{' '}
          <span role="img" aria-label="emoji">
            👋
          </span>
        </h1>
        <EmojiContext.Provider value={emojis}>
          <EmojiTextBox />
        </EmojiContext.Provider>
      </div>
    );
  }
}

export default App;
