import { EmojiEmotions } from '@mui/icons-material';
import EmojiPicker from 'emoji-picker-react';
import { Data } from 'emoji-mart';
import { Picker } from 'emoji-mart';
import "./inputField.scss"
import { useState } from 'react';

const InputField = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [currentEmoji, setCurrentEmoji] = useState(null);
  const [viewEmojiPlane, setViewEmojiPlane] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue("")
  };

  return (
    <form className="write" onSubmit={handleCommentSubmit}>
        {props.title && <h3>{props.title}</h3>}<input 
        type="text" 
        placeholder= {props.placeholder ? props.placeholder : "Add a comment..."} 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        type = {props.type}
      />
      {props.desc && <p>{props.desc}</p>}
      
      <EmojiEmotions 
        onClick={() => setViewEmojiPlane(!viewEmojiPlane)}
      />
      {viewEmojiPlane && (
        <div className="emojiplane">
        <EmojiPicker
        searchPlaceholder='Ara'
        emojiStyle='native'
        theme='dark'
        onEmojiClick={(e)=>{
          setInputValue(prevInput=> prevInput + e.emoji)
          setViewEmojiPlane(false)
        }}
        previewConfig={{
          showPreview: true,
          defaultEmoji:"1f92a",
          defaultCaption:"Add your emoji here..."
        }}
        />
        </div>
      )}
    </form>
  );
};

export default InputField;
