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
    const url: string = window.location.origin;

    return (
      <ul>
        {links.map(link => {
          const onClick = () => {
            remove(link.id);
          }

          if (link) {
            return (
              <li className={styles.link} key={link.id}>
                <a href={`${url}/${link.id}`}>
                  {url}/{link.id}
                </a> clicks: {link.clicks}
                <button className={styles.remove} onClick={onClick}>-</button>
              </li>
            );
          }

          return null;
        })}
      </ul>
    );
  }
}

export default Content;
