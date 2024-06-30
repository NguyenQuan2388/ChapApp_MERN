import SideBar from '../../components/Sidebar/SideBar.jsx';
import MessageContainer from '../../components/messages/MessageContainer.jsx';
import MessageInput from '../../components/messages/MessageInput.jsx';

const Home = () => {
  return (
    <div className = "flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <SideBar />
        <MessageContainer />
        <MessageInput />
    </div>
  )
}

export default Home;