import * as React from 'react';
import * as styles from './Content.css';

export interface InterfaceContent {
  add: any;
  index: number,
}

class Content extends React.Component<InterfaceContent> {
  public state = {
    shortcut: '',
  }

  private input: any = null;

  public onClick = () => {
    const { add, index } = this.props;
    const { value } = this.input;

    add(value);

    this.setState({
      shortcut: `${window.location.origin}/${index}`,
    });
  }

  public render() {
    const { shortcut } = this.state;

    return (
      <div className={styles.root}>
        <h1 className={styles.title}>Add link to reduce</h1>
        <input ref={input => { this.input = input }} className={styles.input} placeholder='https://...' />
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
