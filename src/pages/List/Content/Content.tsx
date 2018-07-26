import * as React from 'react';
import { InterfaceLink } from 'Types';
import * as styles from './Content.css';

export interface InterfaceContent {
  removeLink: any;
  links: InterfaceLink[],
}

class Content extends React.Component<InterfaceContent> {
  public render() {
    const { links, removeLink } = this.props;
    const url: string = window.location.origin;

    return (
      <ul>
        {links.map(({ id, clicks }) => {
          const href = `${url}/${id}`;
          const onClick = () => {
            removeLink(id);
          }

          return (
            <li className={styles.link} key={id}>
              <a href={href}>
                {href}
              </a>
              <span> clicks: {clicks}</span>
              <button className={styles.remove} onClick={onClick}>-</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Content;
