import {
  FC, lazy, memo, useState, useEffect,
} from 'react';
import { Button, Group, Header } from '@vkontakte/vkui';

import Suspense from '../Suspense';

import { Technology } from './data';

const CustomList = lazy(() => import('../CustomList'));

interface TechnologyGroupProps {
  id: string;
  title: string;
  draggingList: Technology[];
}

const TechnologyGroup: FC<TechnologyGroupProps> = ({
  id,
  title,
  draggingList,
}) => {
  const storedOrientation = localStorage.getItem(`orientation${id}`);
  const [isHorizontal, setIsHorizontal] = useState<boolean>(storedOrientation === 'horizontal');

  useEffect(() => {
    localStorage.setItem(`orientation${id}`, isHorizontal ? 'horizontal' : 'vertical');
  }, [isHorizontal]);

  const header = (
    <Header
      style={{ marginBottom: 10 }}
      mode='secondary'
      aside={(
        <Button size='s' appearance='neutral' onClick={() => setIsHorizontal((prevState) => !prevState)}>
          Изменить ориентацию
        </Button>
      )}
    >
      {title}
    </Header>
  );

  return (
    <Group header={header}>
      <Suspense id={id}>
        <CustomList
          items={draggingList}
          isHorizontal={isHorizontal}
        />
      </Suspense>
    </Group>
  );
};

export default memo(TechnologyGroup);
