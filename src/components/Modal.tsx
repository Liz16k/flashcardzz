import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { ADD_CARD, ADD_DECK, HIDE_MODAL } from "./store"

export const Modal = ({ type, isVisible }: any) => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data: any) => {
    dispatch(
      type === "card"
        ? ADD_CARD(data.deckName, data.question, data.answer)
        : ADD_DECK(data.deckName)
    )
    hideModal()
  }
  const state = useSelector(
    (state: {
      lib: {
        decks: Array<{
          deckName: string
          cards: Array<{ question: string; answer: string }>
        }>
      }
      modal: {}
    }) => state.lib
  )
  const dispatch = useDispatch()

  useEffect(() => {
    //---reset-deckName-input-value-after-cancel/submit-action
    reset()
  }, [state])

  const hideModal = () => {
    dispatch(HIDE_MODAL())
  }

  return isVisible ? (
    <div className="absolute w-screen h-screen top-0 left-0 flex justify-center items-center">
      <div className="absolute shadow-2xl rounded-3xl h-80 w-1/2 max-w-screen-sm -translate-y-10 bg-white">
        <h2 className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 font-bold rounded-t-xl text-center text-white text-3xl">
          create new {type}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {type === "deck" ? (
            <div className="px-4 py-8">
              <input
                {...register("deckName", { required: true, minLength: 3 })}
                className="block text-4xl w-2/3 my-8 px-4 py-2 border-2 rounded-2xl focus:outline-blue-500 mx-auto"
                placeholder="enter deck's name"
              />
              <div className="absolute bottom-0 w-11/12 py-4 flex justify-between text-white">
                <Button onClick={() => hideModal()}>cancel</Button>
                <Button type="submit">create</Button>
              </div>
            </div>
          ) : (
            <>
              <div className="p-4 text-lg flex flex-col">
                <select
                  {...register("deckName")}
                  defaultValue={""}
                  className="border-2 border-blue-400 rounded-2xl p-2 mb-2"
                >
                  {state.decks.map((deck: { deckName: string }) => (
                    <option value={deck.deckName} key={deck.deckName}>
                      {deck.deckName}
                    </option>
                  ))}
                </select>
                <div className="flex h-28 gap-4">
                  <textarea
                    {...register("question")}
                    placeholder="enter question"
                    className="resize-none w-full my-2 px-4 py-2 border-2 rounded-2xl focus:outline-blue-500 break-words"
                  ></textarea>
                  <textarea
                    {...register("answer")}
                    placeholder="enter question"
                    className="
                    resize-none
                    w-full
                    my-2
                    px-4
                    py-2
                    border-2
                    rounded-2xl
                    focus:outline-blue-500
                    break-words"
                  ></textarea>
                </div>
                <div className="absolute bottom-0 w-11/12 py-4 flex justify-between text-white">
                  <Button onClick={() => hideModal()}>cancel</Button>
                  <Button type="submit">create</Button>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  ) : null
}

const Button = ({ children, type = "button", onClick }: any) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 p-2 w-32 rounded-xl hover:brightness-90"
    >
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
