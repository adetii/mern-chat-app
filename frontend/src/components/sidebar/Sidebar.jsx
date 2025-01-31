import SearchInput  from "./SearchInput"
import Conversations from "./Conversations";
import LogoutButton  from "./LogoutButton";

export const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex-col">
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />

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
