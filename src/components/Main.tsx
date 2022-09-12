import { DeckPage } from "./DeckPage"
import { Decks } from "./decks/Decks"
import { Modal } from "./Modal"
import { PageTitle } from "./PageTitle"

export const Main = () => {
  return (
    <main className="max-w-screen-lg mx-auto p-8 pt-2">
      <PageTitle />
      <Decks />

      <PageTitle title="myDeck" />
      <DeckPage />

      <Modal action="" />
    </main>
  )
}
