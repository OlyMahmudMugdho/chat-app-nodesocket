import ChatContainer from "./ChatContainer";
import TextBox from "./TextBox";

const ChatApp = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-emerald-500 pt-1 flex items-center justify-center">
        <ChatContainer />
        <TextBox />
    </div>
  )
}

export default ChatApp