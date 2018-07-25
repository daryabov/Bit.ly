interface InterfaceAction {
  type: string
  payload?: any
}

export const add = (payload: string): InterfaceAction => ({ type: 'ADD', payload });
export const remove = (payload: number): InterfaceAction => ({ type: 'REMOVE', payload });
