import React from 'react'
import EmojiContext from './EmojiContext'
export default (props) => (
    <EmojiContext.Consumer>
        {data => (
     <textarea   
     {...props} 
     value="Hello World"
     rows="10" 
     cols="50"
     value={"Hello World smile".replace('smile', data.emojis.smile)} 
     ></textarea>
     )}
    </EmojiContext.Consumer>
    
)