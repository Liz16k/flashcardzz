export const Modal = ({ action }: any) => {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 flex justify-center items-center">
      <div className="absolute shadow-2xl rounded-3xl h-80 w-1/2 max-w-screen-sm -translate-y-10 bg-white">
        <h2 className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 font-bold rounded-t-xl text-center text-white text-3xl">
          create new {action}
        </h2>
        {action == "deck" ? (
          <>
            <div className="px-4 py-8">
              <input
                className="block text-4xl w-2/3 my-8 px-4 py-2 border-2 rounded-2xl focus:outline-blue-500 mx-auto"
                type="text"
                placeholder="enter deck's name"
              />
              <ModalBtns />
            </div>
          </>
        ) : (
          <>
            <div className="p-4 text-lg flex flex-col">
              <select
                name="decks"
                id=""
                className="border-2 border-blue-400 rounded-2xl p-2 mb-2"
              >
                <option value="deck-1">deck 1</option>
                <option value="deck-2">deck 2</option>
              </select>
              <div className="flex h-28 gap-4">
                <Textarea placeholder="enter question" />
                <Textarea placeholder="enter answer" />
              </div>

              <ModalBtns />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const Button = ({ children }: any) => {
  return (
    <button className="bg-blue-500 p-2 w-32 rounded-xl hover:brightness-90">
      {children}
    </button>
  )
}

const Textarea = ({ placeholder }: any) => {
  return (
    <textarea
      className="resize-none w-full my-2 px-4 py-2 border-2 rounded-2xl focus:outline-blue-500 break-words"
      placeholder={placeholder}
    />
  )
}

const ModalBtns = () => {
  return (
    <div className="absolute bottom-0 w-11/12 py-4 flex justify-between text-white">
      <Button>cancel</Button>
      <Button>create</Button>
    </div>
  )
}
