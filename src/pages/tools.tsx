import {useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ToolsCatalog from '@site/src/components/Tools/ToolsCatalog';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import ToolFormModal from '../components/Tools/ToolFormModal';
import { handleToolSubmit } from '../components/Tools/Helpers';

const ToolsPage: React.FC = () => {
  const {siteConfig} = useDocusaurusContext();
  const [showAddTool, setShowAddTool] = useState(false);
  
interface ToolPageHeaderProps {
  showAddTool: () => void;
}

  const ToolPageHeader:  React.FC<ToolPageHeaderProps> = ({ showAddTool }) => {
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Tools
          </Heading>
          <p className="hero__subtitle">Find the right tool for the task</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              onClick={showAddTool}
              >
              Add a tool ➕
            </Link>
          </div>
        </div>
      </header>
    );
  }
  return (
    <Layout
      title={`Agentic AI Tools`}
      description="Choose the right tool for your agent's task">
      <ToolPageHeader showAddTool={() => setShowAddTool(true)} />
      <main>
        <ToolsCatalog />
      </main>
      <ToolFormModal
        open={showAddTool}
        setOpen={setShowAddTool}
        onSubmit={async (tool) => {
          console.log('Submitted tool', tool);
          await handleToolSubmit(tool);
          setShowAddTool(false);
        }}
      />
    </Layout>
  );
}

export default ToolsPage;