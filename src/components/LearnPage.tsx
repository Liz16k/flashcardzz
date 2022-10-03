import { useEffect, useState } from "react"
import ReactCardFlip from "react-card-flip"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { PageTitle } from "./PageTitle"

export const LearnPage = () => {
  const navigate = useNavigate()
  const state = useSelector((state: any) => state.lib)
  const { deckName }: any = useParams()
  const [num, setNum] = useState(1)
  const [flip, setFlip] = useState(false)
  const [isFinish, setFinish] = useState(false)
  const [numToRepeat, setNumToRepeat] = useState(0)
  const initialState = [
    ...Object.values(state.decks[deckName.split("-").join(" ")]),
  ]
  const [deck, setDeck] = useState(initialState)

  const total = Object.keys(state.decks[deckName.split("-").join(" ")]).length
  const [card, setCard] = useState(deck[num - 1])

  const moveNext = () => {
    if (num >= total + numToRepeat) {
      setFinish(true)
      return
    }
    setNum((prev) => prev + 1)
    setCard(deck[num])
  }

  return (
    <>
      <PageTitle title={deckName} />
      <h2 className="block w-fit text-blue-900 font-bold text-xl mx-auto my-2">
        {num - numToRepeat}/{total}
      </h2>
      {!isFinish ? (
        <>
          <div className="mb-8" onClick={() => setFlip((prev) => !prev)}>
            <h3 className="text-center mb-4 text-blue-400">*tap to check answer</h3>
            <ReactCardFlip isFlipped={flip} flipDirection="vertical">
              <Card type="question" card={card} />
              <Card type="answer" card={card} />
            </ReactCardFlip>
          </div>
          <div className="w-[32rem] mx-auto flex justify-between text-xl border border-blue-500 rounded-3xl">
            <button
              className="w-1/2 p-2 text-blue-500 "
              onClick={() => {
                setFlip(false)
                setTimeout(() => {
                  setDeck((prev) => [...prev, card])
                  setNumToRepeat((prev) => prev + 1)
                  moveNext()
                }, 200)
              }}
            >
              still learning
            </button>
            <button
              className="w-1/2 p-2 bg-blue-500 text-white rounded-3xl"
              onClick={() => {
                setFlip(false)
                setTimeout(() => moveNext(), 200)
              }}
            >
              know
            </button>
          </div>
        </>
      ) : (
        <div className="w-96 mx-auto text-center font-bold text-blue-500 text-3xl">
          Good job!
          <img
            src="https://img.freepik.com/premium-vector/business-success-concept-illustration_1133-823.jpg?w=2000"
            alt=""
          />
          <button
            className="w-1/2 p-2 bg-blue-500 text-white rounded-3xl text-xl"
            onClick={() => navigate(-1)}
          >
            back to the deck
          </button>
          <button
            onClick={() => {
              setNum(1)
              setFinish(false)
              setNumToRepeat(0)
            }}
            className="w-1/2 p-2 text-blue-500 text-xl"
          >
            once again
          </button>
        </div>
      )}
    </>
  )
}

const Card = ({ type, card }: any) => {
  return (
    <div
      className={`mx-auto rounded-xl text-xl text-center p-4 w-[32rem] h-[18rem] flex flex-col justify-center items-center cursor-pointer ${
        type === "answer"
          ? "hover:bg-blue-200 hover:text-blue-700 bg-gradient-to-r from-cyan-200 to-blue-200 text-blue-900"
          : "hover:bg-blue-600 hover:text-cyan-200 bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
      }`}
    >
      <h2>{type === "question" ? card.question : card.answer}</h2>
    </div>
  )
}
