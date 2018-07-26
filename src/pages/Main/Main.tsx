import { add } from 'Actions/links';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { InterfaceLinks } from 'Types';
import Content from './Content';

export interface InterfaceMain {
  links: InterfaceLinks;
  onAddLink: any;
}

class Main extends React.Component<InterfaceMain> {
  public render() {
    const { onAddLink } = this.props;

    return (
      <Content addLink={onAddLink} />
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddLink(link: object) {
    dispatch(add(link));
  },
});


export default connect(null, mapDispatchToProps)(Main);