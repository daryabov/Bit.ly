import { addClick } from 'Actions/links';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { InterfaceLink } from 'Types';

export default (store: any) => {
  const { links } = store.getState();
  const linkId = window.location.pathname.slice(1);
  const link = links && links.list.find((element:InterfaceLink) => linkId === element.id)
  store.dispatch(addClick(linkId));

  if (link) {
    window.location = link.link;
  }

  return () => <Redirect to="/" />;
}