import { combineReducers, createStore } from "redux"
import { loadState, setState } from "./lstorage"

const filterObj = (object: any, excluded: any) => {
  const cardsId: string[] = Object.keys(object).filter(
    (key) => key !== excluded
  )
  const obj: any = {}
  cardsId.forEach((key) => (obj[key] = { ...object[key] }))

  return obj
}

const modalInitialState = {
  type: "deck",
  isVisible: false,
}
type DeckType = { question: string; answer: string; deck: string }
type libType = {
  decks: { [deckName: string]: { [cardId: string]: DeckType } }
}

const libInitialState: libType = loadState() ?? {
  decks: {},
}

//actions
export const SHOW_DECK_MODAL = () => ({
  type: "SHOW_DECK_MODAL",
})
export const SHOW_CARD_MODAL = () => ({
  type: "SHOW_CARD_MODAL",
})
export const HIDE_MODAL = () => ({
  type: "HIDE_MODAL",
})

//---------------
export const ADD_CARD = (
  deckName: string,
  question: string,
  answer: string,
  cardId: string
) => ({
  type: "ADD_CARD",
  deckName,
  answer,
  question,
  cardId,
})
export const ADD_DECK = (deckName: string) => ({
  type: "ADD_DECK",
  deckName,
})
export const REMOVE_CARD = (cardId: string, deckName: string) => ({
  type: "REMOVE_CARD",
  cardId,
  deckName,
})
export const REMOVE_DECK = (deckName: string) => ({
  type: "REMOVE_DECK",
  deckName,
})

const modalReducer = (state = modalInitialState, action: any) => {
  switch (action.type) {
    case "SHOW_DECK_MODAL":
      return { ...state, isVisible: true, type: "deck" }
    case "SHOW_CARD_MODAL":
      return { ...state, isVisible: true, type: "card" }
    case "HIDE_MODAL":
      return { ...state, isVisible: false }
    default:
      return state
  }
}

const libReducer = (
  state: libType = loadState() ?? libInitialState,
  action: any
) => {
  switch (action.type) {
    case "ADD_CARD":
      return {
        decks: {
          ...state.decks,
          [action.deckName]: {
            ...state.decks[action.deckName],
            [action.cardId]: {
              question: action.question,
              answer: action.answer,
              deckName: action.deckName,
            },
          },
        },
      }
    case "ADD_DECK":
      return {
        decks: { ...state.decks, [action.deckName]: {} },
      }
    case "REMOVE_CARD":
      console.log(action.deckName)
      console.log(filterObj(state.decks[action.deckName], action.cardId))

      return {
        decks: {
          ...state.decks,
          [action.deckName]: {
            ...filterObj(state.decks[action.deckName], action.cardId),
          },
        },
      }
    case "REMOVE_DECK":
      return {
        decks: { ...filterObj(state.decks, action.deckName) },
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ modal: modalReducer, lib: libReducer })

export const configureStore = () => {
  const persistedState = {
    lib: libInitialState,
    modal: modalInitialState,
  }
  const store = createStore(rootReducer, persistedState)

  store.subscribe(() => {
    return setState({
      decks: { ...store.getState().lib.decks },
    })
  })
  return store
}
