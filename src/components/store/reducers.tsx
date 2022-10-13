import { libInitialState, modalInitialState } from "./initialStates"
import { loadState } from "./lstorage"
import { libType } from "./types"

export const modalReducer = (state = modalInitialState, action: any) => {
  switch (action.type) {
    case "SHOW_DECK_MODAL":
      return { ...state, isVisible: true, type: "deck" }
    case "SHOW_CARD_MODAL":
      return {
        ...state,
        isVisible: true,
        type: "card",
        cardId: action.cardId || null,
        deckName: action.deckName || null,
      }
    case "HIDE_MODAL":
      return { ...state, isVisible: false }
    default:
      return state
  }
}

export const libReducer = (
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

const filterObj = (object: any, excluded: any) => {
  const cardsId: string[] = Object.keys(object).filter(
    (key) => key !== excluded
  )
  const obj: any = {}
  cardsId.forEach((key) => (obj[key] = { ...object[key] }))

  return obj
}
