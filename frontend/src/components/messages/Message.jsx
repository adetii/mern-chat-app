import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profile = fromMe ? authUser.profile : selectedConversation?.profile || '/default-avatar.png'; // Fallback profile
  const bubbleBgColor = fromMe ? 'bg-blue-500' : 'bg-gray-900';
  const shakeClass = message.shouldShake ? "shake" : ""

  return (
    <div className={`chat ${chatClassName}`}>
      {/* Profile Picture */}
      <div className="chat-image">
        <div className="w-10 rounded-full overflow-hidden">
          <img alt="User profile" src={profile} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Message Content */}
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>

      {/* Timestamp */}
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>    
    </div>
  );
};

export default Message;






//STARTER CODE SNIPPET

// export const Message = () => {
//     return (
//       <div className="chat chat-end">
  
//           <div className="chat-image avatar">
//               <div className="w-10 rounded-full">
  
//               <img
//                   alt="Tailwind CSS chat bubble component"
//                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//               </div>
  
//           </div>
//               <div className={`chat-bubble text-white bg-blue-500`}>Hi! what is upp??</div>
//               <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:30</div>    
//       </div>
//     );
//   };
   
//   export default Message;