import { remove } from 'Actions/links';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { InterfaceLink, InterfaceState } from 'Types';
import Content from './Content';

export interface InterfaceList {
  links: InterfaceLink[];
  onRemoveLink: any;
}

class List extends React.Component<InterfaceList> {
  public render() {
    const { onRemoveLink, links } = this.props;

    return (
      <Content removeLink={onRemoveLink} links={links} />
    );
  }
}

const mapStateToProps = (state: InterfaceState) => ({
  links: state.links.list,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRemoveLink(id: number) {
    dispatch(remove(id));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(List);