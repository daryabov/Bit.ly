import { add } from 'Actions/links';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { InterfaceState } from 'Types';
import Content from './Content';

export interface InterfaceMain {
  onAddLink: never;
}

class Main extends React.Component<InterfaceMain> {
  public render() {
    const { onAddLink } = this.props;

    return (
      <Content add={onAddLink} />
    );
  }
}

const mapStateToProps = (state: InterfaceState) => ({
  links: state.links,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddLink(link: string) {
    dispatch(add(link));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);