import { EmojiEmotions } from '@mui/icons-material';
import EmojiPicker from 'emoji-picker-react';
import { Data } from 'emoji-mart';
import { Picker } from 'emoji-mart';
import "./inputField.scss"
import { useState } from 'react';

const InputField = () => {
  const [inputValue, setInputValue] = useState('');
  const [currentEmoji, setCurrentEmoji] = useState(null);
  const [viewEmojiPlane, setViewEmojiPlane] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the backend server for processing here
    console.log(inputValue);
  };

  return (
    <form className="write" onSubmit={handleCommentSubmit}>
      <input 
        type="text" 
        placeholder="Add a comment..." 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
      />
      <EmojiEmotions 
        onClick={() => setViewEmojiPlane(!viewEmojiPlane)}
      />
      {viewEmojiPlane && (
        <div className="emojiplane">
        <h1>Hello</h1>
        </div>
      )}
    </form>
  );
};

export default InputField;
