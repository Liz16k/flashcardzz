import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const toAddress = (string: string) => string.trim().replaceAll(" ", "-")

export const Deck = ({ deckName }: any) => {
  const address = toAddress(deckName)
  const state = useSelector((state: any) => state.lib) 

  return (
    <Link to={`/decks/${address}`}>
      <div className="w-56 h-32 p-4 mt-8 rounded-xl flex flex-col justify-center items-center bg-blue-400 text-white lowercase text-2xl shadow-[0_-15px_rgba(165,243,352)] cursor-pointer hover:bg-blue-500">
        <h2 >{deckName}</h2> 
        <h3 className="text-[1rem] text-blue-200">cards: {Object.keys(state.decks[deckName]).length}</h3>
      </div>
    </Link>
  )
}
