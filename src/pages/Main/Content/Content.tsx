import * as React from 'react';
import * as styles from './Content.css';

export interface InterfaceContent {
  add: any;
}

class Content extends React.Component<InterfaceContent> {
  private input: any = null;

  public onClick = () => {
    const { add } = this.props;
    const { value } = this.input;

    add(value);
  }

  public render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <h1 className={styles.appTitle}>Add link to reduce</h1>
          <input ref={input => { this.input = input }} className={styles.input} placeholder='https://...' />
          <button onClick={this.onClick} className={styles.button}>GET SHORT LINK</button>
        </div>
      </div>
    );
  }
}

export default Content;
