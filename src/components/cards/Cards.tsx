import { nanoid } from "nanoid"
import { useSelector } from "react-redux"
import { Card } from "./Card"

export const Cards = ({ deckName }: any) => {
  const state = useSelector((state: any) => state.lib)

  return (
    <div className="flex flex-col gap-6 items-center">
      {Object.entries(state.decks[deckName]).map((pair: any) => {
        return <Card {...pair[1]} cardId={pair[0]} key={nanoid(6)} />
      })}
    </div>
  )
}
