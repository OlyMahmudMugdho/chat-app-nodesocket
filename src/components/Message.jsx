
const Message = ({messageText}) => {
  return (
    <div className="w-7/12 bg-white min-h-10 bg-gray-300 border rounded-md mt-2 mx-3 px-3 flex justify-start items-center text-lg text-zinc-800">
        {messageText}
    </div>
  )
}

export default Message