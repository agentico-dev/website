import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type ToolItem = {
  title?: string;
  name: string;
  description: string;
  author: {
    name: string;
    url: string;
  }
  homepage?: string;
  repository: string;
  bugs?: string;
  license: string;
  category: string;
  skills?: string[];
};

import ToolList from './tools.json';

function Tool({name, title, description}: ToolItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">        
      <a href={"/tools/"+name} key={name} className={clsx('col col--4')}>
        <Heading as="h3">{ title.length > 30 ? `${title.substring(0, 30)}...` : title }</Heading>
        </a>
        <p>{ description.length > 160 ? `${description.substring(0, 160)}...` : description }</p>
      </div>
    </div>
  );
}

export default function ToolsCatalog(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ToolList.map((props, idx) => (
            <Tool key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
