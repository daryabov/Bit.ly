export interface InterfaceAction {
  type: string,
  payload?: any
}

export interface InterfaceState {
  links: InterfaceLinks
}

export interface InterfaceLinks {
  list: InterfaceLink[]
}

export interface InterfaceLink {
  clicks: number;
  link: string,
}