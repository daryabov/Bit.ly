import * as React from 'react';
import { generate } from 'shortid';
import * as styles from './Content.css';

export interface InterfaceContent {
  add: any;
}

class Content extends React.Component<InterfaceContent> {
  public state = {
    shortcut: '',
  }

  private input: any = React.createRef();

  public onClick = () => {
    const { add } = this.props;
    const { value } = this.input;
    const id = generate();

    add({ link: value, id });
    this.input.value = '';
    this.setState({
      shortcut: `${window.location.origin}/${id}`,
    });
  }

  public render() {
    const { shortcut } = this.state;

    return (
      <div className={styles.root}>
        <h1 className={styles.title}>Add link to reduce</h1>
        <input ref={this.input} className={styles.input} placeholder='https://...' />
        <button onClick={this.onClick} className={styles.button}>GET SHORT LINK</button>
        { shortcut !== '' && (
            <div>
              Your shortcut: <input className={styles.shortcut} value={shortcut} readOnly={true} />
            </div>
          )
        }
      </div>
    );
  }
}

export default Content;
