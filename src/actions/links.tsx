interface InterfaceAction {
  type: string
  payload?: any
}

export const add = (payload: object): InterfaceAction => ({ type: 'ADD', payload });
export const remove = (payload: number): InterfaceAction => ({ type: 'REMOVE', payload });
export const addClick = (payload: string): InterfaceAction => ({ type: 'ADD_CLICK', payload });
