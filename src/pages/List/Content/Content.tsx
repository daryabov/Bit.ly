import * as React from 'react';
import { InterfaceLink } from 'Types';
import * as styles from './Content.css';

export interface InterfaceContent {
  remove: any;
  links: InterfaceLink[],
}

class Content extends React.Component<InterfaceContent> {
  public render() {
    const { links, remove } = this.props;
    const url = window.location.origin;

    return (
      <div className={styles.root}>
        <ul>
          {links.map((link, index) => {
            const onClick = () => {
              remove(index);
            }

            return (
              <li key={index}>
                <a href={`${url}/${index}`}>{url}/{index}</a> clicks: {link.clicks}
                <button className={styles.remove} onClick={onClick}>-</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Content;
