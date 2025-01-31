import { IoSearchOutline } from "react-icons/io5";


export const SearchInput = () => {
  return (
        <form className='flex items-center gap-2'>
            <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-sky-400'>
            <IoSearchOutline className="w-5.5 h-5.5 outline-none"/>
            </button>
        </form>
  );
};

export default SearchInput;








//STARTER CODE FOR SEARCINPUT FILE

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