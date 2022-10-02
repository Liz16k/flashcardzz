import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { DeckPage } from "./components/DeckPage"
import { Decks } from "./components/decks/Decks"
import { Header } from "./components/Header"
import { Modal } from "./components/Modal"
import { NotFound } from "./components/NotFound"
import { Quiz } from "./Quiz"

function App() {
  const state = useSelector((state: any) => state)
  return (
    <>
      <Header />
      <main className="max-w-screen-lg mx-auto p-8 pt-2">
        <Routes>
          <Route path="/" element={<Decks />} />
          <Route path="decks" element={<Decks />} />
          <Route path="decks/:deckName" element={<DeckPage />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Modal type={state.modal.type} isVisible={state.modal.isVisible} />
    </>
  )
}

export default App
