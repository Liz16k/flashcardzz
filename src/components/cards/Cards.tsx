import { useSelector } from "react-redux"
import { Card } from "./Card"

export const Cards = ({ deckName, index }: any) => {
  const store = useSelector((state: any) => state.lib)

  return (
    <div className="flex flex-col gap-6 items-center">
      {deckName
        ? store.decks[index]?.cards.map((card: any) => {
            return <Card {...card} key={card.answer} />
          })
        : null}
    </div>
  )
}
