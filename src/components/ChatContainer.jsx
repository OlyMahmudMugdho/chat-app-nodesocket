import ChatBody from "./ChatBody";
import Header from "./Header";

const ChatContainer = () => {
  return (
    <div className="w-[98%] md:w-10/12 lg:w-8/12  bg-indigo-400 border border-solid border-purple-600 ">
        <Header />
        <ChatBody />
    </div>
  )
}

export default ChatContainer