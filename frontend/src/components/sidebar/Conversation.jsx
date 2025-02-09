import { useSocketContext } from '../../context/SocketContextProvider';
import useConversation from '../../zustand/useConversation';

export const Conversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const { onlineUsers } = useSocketContext();
    const isSelected = selectedConversation?._id === conversation._id;
    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
                    ${isSelected ? "bg-sky-500" : ""}
                `}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-400">
                        <img src={conversation.profile} alt="user avatar" className="w-full h-full object-cover" />
                    </div>

                    {/* Green dot indicator */}
                    {isOnline && (
                        <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 p-1 rounded-full border-1  translate-x-1/2 -translate-y-1/2"></div>
                    )}
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200">{conversation.fullName}</p>
                        <span className="text-xl">{emoji}</span>
                    </div>
                </div>
            </div>

            {!lastIdx && <div className="divider my-0 py-0 h-1" />}
        </>
    );
};

export default Conversation;




  //STARTUP CODE SNIPPET FOR THIS FILE 

//   export const Conversation = () => {
//     return (
//       <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user avatar" />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1">
//             <div className="flex gap-3 justify-between">
//                 <p className="font-bold text-gray-200">Adeti Judith</p>
//                 <span className="text-xl">🥰</span>
//             </div>
//         </div>
//       </div>

//       <div className="divider my-0 py-0 h-1" />
//       </>
//     );
//   };
  
//   export default Conversation;