import { nanoid } from "nanoid"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { ADD_CARD, ADD_DECK, HIDE_MODAL } from "./store/actions"

export const Modal = ({ type, isVisible }: any) => {
  const { register, handleSubmit, reset } = useForm()
  const state = useSelector((state: any) => state.lib)
  const { cardId, deckName } = useSelector((state: any) => state.modal)
  const card = state.decks?.[deckName]?.[cardId] || { question: "", answer: "" }
  const onSubmit = (data: any) => {
    dispatch(
      type === "card"
        ? ADD_CARD(
            data.deckName,
            data.question,
            data.answer,
            cardId ?? nanoid(6)
          )
        : ADD_DECK(data.deckName)
    )
    hideModal()
  }

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
                className="block text-4xl w-4/5 my-8 px-6 py-2 pb-3 border-2 rounded-2xl focus:outline-blue-500 mx-auto"
                placeholder="enter deck's name"
              />
              <div className="absolute bottom-0 left-0 w-full py-4 flex justify-around text-white">
                <Button onClick={() => hideModal()}>cancel</Button>
                <Button type="submit">create</Button>
              </div>
            </div>
          ) : (
            <>
              <div className="p-4 text-lg flex flex-col">
                <select
                  {...register("deckName")}
                  defaultValue={deckName}
                  className="border-2 border-blue-400 rounded-2xl p-2 mb-2"
                >
                  {Object.keys(state.decks).map((deck) => (
                    <option value={deck} key={nanoid(6)}>
                      {deck}
                    </option>
                  ))}
                </select>
                <div className="flex h-28 gap-4">
                  <textarea
                    {...register("question", {
                      required: true,
                      min: 3,
                      max: 100,
                    })}
                    defaultValue={card.question}
                    placeholder="enter question"
                    className="resize-none w-full my-2 px-4 py-2 border-2 rounded-2xl focus:outline-blue-500 break-words"
                  ></textarea>
                  <textarea
                    {...register("answer", {
                      required: true,
                      min: 3,
                      max: 250,
                    })}
                    defaultValue={card.answer}
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
                <div className="absolute bottom-0 left-0 w-full py-4 flex justify-around text-white">
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
