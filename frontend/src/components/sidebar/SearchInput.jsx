import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversations";
import toast from "react-hot-toast";


export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation()
  const { conversations } = useGetConversation()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error('Search term must be 3 characters long')
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase(). includes(search.toLocaleLowerCase()));

    if(conversation) {
      setSelectedConversation(conversation)
      setSearch('');
    } else toast.error("No user found!")
  }

  return (
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
            <input type="text" placeholder='Search...' className='input input-bordered rounded-full'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className='btn btn-circle bg-sky-400'>
            <IoSearchOutline className="w-5.5 h-5.5 outline-none"/>
            </button>
        </form>
  );
};

export default SearchInput;








//STARTER CODE FOR SEARCH INPUT FILE

// import { IoSearchOutline } from "react-icons/io5";


// export const SearchInput = () => {
//   return (
//         <form className='flex items-center gap-2'>
//             <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
//             <button type='submit' className='btn btn-circle bg-sky-900'>
//             <IoSearchOutline className="w-5.5 h-5.5 outline-none"/>
//             </button>
//         </form>
//   );
// };

// export default SearchInput;