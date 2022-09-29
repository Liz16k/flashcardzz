import { combineReducers, createStore } from "redux"

const modalInitialState = {
  type: "deck",
  isVisible: false,
}
type DeckType = {
  deckName: string
  cards: Array<{ question: string; answer: string; deck: string }>
}

type libType = {
  decks: Array<DeckType>
}

const libInitialState: libType = {
  decks: [
    {
      deckName: "react theory",
      cards: [
        {
          question: "State library for React..",
          answer: "Redux",
          deck: "react theory",
        },
        {
          question: "Main options of Redux:",
          deck: "react theory",
          answer: "store, reducer, actions",
        },
        {
          question: "Redux Hooks",
          answer: "useSelector(), useDispatch()",
          deck: "react theory",
        },
      ],
    },
  ],
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
  answer: string
) => ({
  type: "ADD_CARD",
  deckName: deckName,
  answer: answer,
  question: question,
})
export const ADD_DECK = (deckName: string) => ({
  type: "ADD_DECK",
  deckName,
})
export const REMOVE_CARD = () => ({
  type: "REMOVE_CARD",
})
export const REMOVE_DECK = () => ({
  type: "REMOVE_DECK",
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

const libReducer = (state = libInitialState, action: any) => {
  switch (action.type) {
    case "ADD_CARD":
      const index = state.decks.findIndex(
        (deck) => deck.deckName === action.deckName
      )     
      return {
        decks: [
          ...state.decks.slice(0, index),
          {
            ...state.decks[index],
            cards: [
              ...state.decks[index].cards,
              {
                question: action.question,
                answer: action.answer,
                deck: action.deckName,
              },
            ],
          },
          ...state.decks.slice(index + 1),
        ],
      }
    case "ADD_DECK":
      return {
        decks: [...state.decks, { deckName: action.deckName, cards: [] }],
      }
    case "REMOVE_CARD":
      return state
    case "REMOVE_DECK":
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({ modal: modalReducer, lib: libReducer })

export const store = createStore(rootReducer)
