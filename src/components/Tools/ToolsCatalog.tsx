import type { ReactNode } from 'react';
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
import ToolListProd from '../../data/tools.json';
import ToolListDev from '../../data/tools.dev.json';
import {
  Avatar,
  Card,
  CardContent,
  CardOverflow,
  Link,
  Stack,
  Typography
} from '@mui/joy';
import ToolCardActions from './ToolCardActions';

const ToolList = process.env.NODE_ENV === 'production' ? ToolListProd : ToolListDev;
const ToolArray = Object.values(ToolList);

function Tool({ name, title, description }: ToolItem) {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1 }}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/194648426"
          // src="https://avatars.githubusercontent.com/u/14910446"
          // src="https://avatars.githubusercontent.com/u/1000001"
          alt="Author"
        />
        <Stack>
          <Typography sx={{ fontWeight: 'bold' }}>
            <Link href={"/tools/" + name} key={name}>
              {title.length > 26 ? `${title.substring(0, 26)}...` : title}
            </Link>
          </Typography>
          <Typography level="body-xs">{name.length > 35 ? `${name.substring(0, 35)}...` : name}</Typography>
        </Stack>
      </CardContent>
      <CardOverflow>
        <CardContent>
          <Typography level="body-md">{description.length > 80 ? `${description.substring(0, 80)}...` : description}</Typography>
        </CardContent>
      </CardOverflow>
      {/* @todo - add logic to actions */}
      {/* <ToolCardActions /> */}
    </Card>
  );
}

export default function ToolsCatalog(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ gap: '0.5rem' }}>
          {ToolArray.map((props, idx) => (
            <Tool key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
