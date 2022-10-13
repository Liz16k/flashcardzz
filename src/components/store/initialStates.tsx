import { loadState } from "./lstorage"

export const modalInitialState = {
  type: "deck",
  isVisible: false,
}

export const libInitialState: libType = loadState() ?? {
  decks: {},
}