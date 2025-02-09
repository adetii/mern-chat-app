import { BsSend } from 'react-icons/bs'; 
import { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  // Auto-expand textarea dynamically
  const handleInput = (event) => {
    event.target.style.height = "40px"; // Reset height
    event.target.style.height = event.target.scrollHeight + "px"; // Expand height dynamically
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        {/* Replaced input with textarea for auto-expanding effect */}
        <textarea
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white resize-none"
          placeholder="Send a message"
          value={message}
          rows="1"
          style={{
            minHeight: "40px",
            maxHeight: "150px",
            overflowY: "hidden",
            paddingRight: "50px", // Ensures text doesn't go under the send button
          }}
          onInput={handleInput}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
          {loading ? <div className="loading loading-spinner"></div> : <BsSend />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;






//STARTER CODE SNIPPET 

// import { BsSend } from 'react-icons/bs'; 

// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//         <div className="w-full">
//             <input type="text"
//             className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
//             placeholder="Send a message"
//             />
//             <button type='submit' className="absolute inset-y-0 end-0 flex items-center pe-3">
//                 <BsSend />
//             </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput;