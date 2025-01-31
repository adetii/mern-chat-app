import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return <div className="flex sm:h-[700px] md:h-[600px]  p-5 bg-plaintiff rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-400">
    <Sidebar />
    <MessageContainer /> 
  </div>;

  
};

export default Home;





