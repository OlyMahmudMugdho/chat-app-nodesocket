import Message from "./Message"

const ChatBody = () => {
  return (
    <div className="w-full md:h-[30rem]  h-[82vh] pt-0 mt-0 overflow-y-scroll">
        <Message messageText={"sample message"} />
    </div>
  )
}

export default ChatBody

// h-34rem