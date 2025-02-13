import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

export const Sidebar = () => {
  return (
    <div className="border-r border-slate-400 p-4 flex flex-col">
      {/* Search Bar - Fixed */}
      <SearchInput />
      
      {/* Divider */}
      <div className="divider px-3"></div>

      {/* Conversations - Scrollable */}
      <div className="overflow-y-auto overflow-x-hidden ">
        <Conversations />
      </div>

      {/* Logout Button - Fixed */}
      <LogoutButton />
    </div>
  );
};

export default Sidebar;



//STARTER CODE FOR THIS FILE 

// import SearchInput  from "./SearchInput"
// import Conversations from "./Conversations";
// import LogoutButton  from "./LogoutButton";

// export const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex-col">
//         <SearchInput />
//         <div className="divider px-3"></div>
//         <Conversations />

//         <LogoutButton /> 
//     </div>
//   );
// };

// export default Sidebar;
