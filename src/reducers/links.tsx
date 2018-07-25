import { Reducer } from 'redux';
import { InterfaceAction, InterfaceState } from 'Types';

const INITIAL_STATE: InterfaceState = {
  links: [],
}

const linksReducer: Reducer = (state: InterfaceState = INITIAL_STATE, action: InterfaceAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      return {
        ...state,
        links: [...state.links, payload],
      }
    case 'REMOVE':
      return {
        ...state,
        links: [...state.links.splice(1, payload)],
      }

    default:
      return state;
  }
}

export default linksReducer;