import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  img?: React.ComponentType<React.ComponentProps<'img'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    img: require('@site/static/img/qbot-ux.webp').default,
    description: (
      <>
        Easily discover, register and configure tools for your AI agents.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    img: require('@site/static/img/agentic-process-automation-3.webp').default,
    description: (
      <>
        Seamlessly leverage MCP Servers to orchestrate tasks with common tools.
      </>
    ),
  },
  {
    title: 'Powered by MCP',
    img: require('@site/static/img/agentic-process-automation-2.webp').default,
    description: (
      <>
        Automate repetitive tasks with AI while maintaining full control.
      </>
    ),
  },
];

function Feature({title, Svg, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* if Svg or img */}
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {/* if img */}
        {img && <img className={styles.featureImg} src={img} alt={title}/>}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
