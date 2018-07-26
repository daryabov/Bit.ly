import { Reducer } from 'redux';
import { InterfaceAction, InterfaceLinks } from 'Types';

const INITIAL_STATE: InterfaceLinks = {
  list: [],
}

const links: Reducer = (state: InterfaceLinks = INITIAL_STATE, action: InterfaceAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      return {
        ...state,
        list: [...state.list, { link: payload, clicks: 0 }],
      }
    case 'REMOVE':
      return {
        ...state,
        list: [...state.list.filter((element:any, index:number) => index !== payload)],
      }
    case "ADD_CLICK":
      return {
        ...state,
        list: [...state.list.map((link:any, id:number) => id === payload ? { ...link, clicks: ++link.clicks } : link)]
      }

    default:
      return state;
  }
}

export default links;