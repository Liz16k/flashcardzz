import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { DeckPage } from "./components/DeckPage"
import { Decks } from "./components/decks/Decks"
import { Header } from "./components/Header"
import { Modal } from "./components/Modal"
import { NotFound } from "./components/NotFound"

function App() {
  const store = useSelector((store: any) => store.modal)
  return (
    <>
      <Header />
      <main className="max-w-screen-lg mx-auto p-8 pt-2">
        <Routes>
          <Route path="/" element={<Decks />} />
          <Route path="decks" element={<Decks />} />
          <Route path="decks/:deckName" element={<DeckPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Modal type={store.type} isVisible={store.isVisible} />
    </>
  )
}

export default App
