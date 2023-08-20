import { FC } from 'react';
import { Tabbar as VKUITabbar, TabbarItem, useAdaptivityConditionalRender } from '@vkontakte/vkui';

import {
  Icon28MailOutline,
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28UserCircleOutline,
} from '@vkontakte/icons';

import {
  VIEW_CONTACTS, VIEW_PROFILE, VIEW_PROJECTS, VIEW_STACK,
} from '../../routes';
import { Pages } from '../../types';

interface ITabbar {
  onStoryChange: (current: Pages) => void;
  activeView: Pages;
}

const Tabbar: FC<ITabbar> = ({ onStoryChange, activeView }) => {
  const { viewWidth } = useAdaptivityConditionalRender();

  return (
    viewWidth.tabletMinus && (
      <VKUITabbar className={viewWidth.tabletMinus.className}>
        <TabbarItem
          onClick={() => onStoryChange(VIEW_PROFILE)}
          selected={activeView === VIEW_PROFILE}
          data-story={VIEW_PROFILE}
          text='Обо мне'
        >
          <Icon28UserCircleOutline />
        </TabbarItem>
        <TabbarItem
          onClick={() => onStoryChange(VIEW_STACK)}
          selected={activeView === VIEW_STACK}
          data-story={VIEW_STACK}
          text='Стэк технологий'
        >
          <Icon28NewsfeedOutline />
        </TabbarItem>
        <TabbarItem
          onClick={() => onStoryChange(VIEW_PROJECTS)}
          selected={activeView === VIEW_PROJECTS}
          data-story={VIEW_PROJECTS}
          text='Проекты'
        >
          <Icon28ServicesOutline />
        </TabbarItem>
        <TabbarItem
          onClick={() => onStoryChange(VIEW_CONTACTS)}
          selected={activeView === VIEW_CONTACTS}
          data-story={VIEW_CONTACTS}
          text='Связаться со мной'
        >
          <Icon28MailOutline />
        </TabbarItem>
      </VKUITabbar>
    )
  );
};

export default Tabbar;
