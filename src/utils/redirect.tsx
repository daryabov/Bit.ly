import { addClick } from 'Actions/links';
import * as React from 'react';
import { Redirect } from 'react-router-dom';

export default (store: any) => {
  const { links } = store.getState();
  const linkId = window.location.pathname.slice(1);
  const link = links && links.list && links.list[linkId] && links.list[linkId].link;
  store.dispatch(addClick(Number(linkId)));

  if (link) {
    window.location = link;
  }

  return () => <Redirect to="/" />;
}