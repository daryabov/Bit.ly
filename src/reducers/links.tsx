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
        list: [
          ...state.list,
          { link: payload.link, clicks: 0, id: payload.id },
        ],
      }
    case 'REMOVE':
      return {
        ...state,
        list: [
          ...state.list.filter(element => element.id !== payload),
        ],
      }
    case "ADD_CLICK":
      return {
        ...state,
        list: [
          ...state.list.map((link:any) => {
            return link && link.id === payload ? { ...link, clicks: ++link.clicks } : link;
          })
        ]
      }

    default:
      return state;
  }
}

export default links;