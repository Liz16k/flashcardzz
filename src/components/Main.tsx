import { useState } from "react"
import { useSelector } from "react-redux"
import { DeckPage } from "./DeckPage"
import { Decks } from "./decks/Decks"
import { Modal } from "./Modal"
import { PageTitle } from "./PageTitle"

export interface state {
  modal: { type: string; isVisible: boolean }
  lib: {}
}

export const Main = () => {
  const state = useSelector((state: any) => state.modal)

  return (
    <>
      <main className="max-w-screen-lg mx-auto p-8 pt-2">
        {/* <PageTitle />
        <Decks /> */}

        <PageTitle title="myDeck" />
        <DeckPage deckName={deckName} />

        <Modal isVisible={state.isVisible} type={state.type} />
      </main>
    </>
  )
}
