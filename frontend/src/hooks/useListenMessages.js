import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContextProvider';
import useConversation from '../zustand/useConversation';

import notificationSound from '../assets/sounds/16403_download_iphone_note_sms_ringtone_iphone_sms_ringtones.mp3';

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const { messages, setMessages } = useConversation();


    useEffect(() => {
       socket?.on("newMessage",(newMessage) => {
        newMessage.shouldShake = true;
        const sound = new Audio(notificationSound);
        sound.play();
         setMessages([...messages,newMessage]);
       }) 


       return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
};

export default useListenMessages;