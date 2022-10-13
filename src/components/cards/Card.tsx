import { useDispatch } from "react-redux"
import { REMOVE_CARD, SHOW_CARD_MODAL } from "../store/actions"

export const Card = ({ question, answer, cardId, deckName }: any) => {
  const dispatch = useDispatch()

  return (
    <div className="text-blue-800 flex rounded-xl shadow-md">
      <div className="rounded-xl bg-sky-100 w-[36rem] p-6 flex items-center">
        <p className="w-[30%] font-bold text-xl">{question}</p>
        <p className="pl-4 w-[70%] border-l-2 border-blue-200">{answer}</p>
      </div>
      <div className="p-4 flex flex-col items-center gap-4">
        <span className="material-symbols-outlined cursor-pointer hover:scale-105"
        onClick={() => {          
          dispatch(SHOW_CARD_MODAL(cardId, deckName))
        }}>
          edit_square
        </span>
        <span
          className="material-symbols-outlined cursor-pointer hover:scale-105"
          onClick={() => {
            dispatch(REMOVE_CARD(cardId, deckName))
          }}
        >
          delete_forever
        </span>
      </div>
    </div>
  )
}
