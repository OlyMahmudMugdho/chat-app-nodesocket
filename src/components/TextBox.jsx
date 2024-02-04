
const TextBox = () => {
  return (
    <div className="flex w-[98%] md:w-10/12 lg:w-8/12  h-14 bg-white h-13 ">
        <input className="w-10/12 inline-block w-10/12 px-2" type="text" />
        <button className="bg-blue-600 w-2/12 text-white font-bold text-lg">
            Send
        </button>
    </div>
  )
}

export default TextBox