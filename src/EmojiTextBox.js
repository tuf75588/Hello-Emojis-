import React from 'react';
import EmojiContext from './EmojiContext';

class EmojiTextBox extends React.Component {
  state = {
    text: ''
  };
  keyUp = (e, data) => {
    if (e.keyCode === 32) {
      this.emojify(data);
    }
  };
  emojify = (data) => {
    
 
  };
  render() {
    return (
      <EmojiContext.Consumer>
        {data => (
          <textarea
            {...this.props}
            rows="10"
            cols="50"
            onChange={event => this.setState({ text: event.target.value })}
            onKeyUp={e => this.keyUp(e, data)}
            value={this.state.text}
          />
        )}
      </EmojiContext.Consumer>
    );
  }
}

export default EmojiTextBox;

// export default (props) => (
//

// )
