import { FC } from 'react';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { useAdaptivityConditionalRender } from '@vkontakte/vkui';
import { Epic as VKUIEpic } from '@vkontakte/vkui/dist/components/Epic/Epic';
import {
  VIEW_CONTACTS, VIEW_PROFILE, VIEW_PROJECTS, VIEW_STACK,
} from '../../routes';
import { Pages } from '../../types';
import Tabbar from '../Tabbar';
import Suspense from '../Suspense';
import {
  Contacts, Profile, Projects, Stack,
} from '../../views';

interface IEpic {
  onStoryChange: (current: Pages) => void;
}

const Epic: FC<IEpic> = ({ onStoryChange }) => {
  const {
    view: activeView = 'profile' as Pages,
  } = useActiveVkuiLocation();
  const { viewWidth } = useAdaptivityConditionalRender();

  return (
    <VKUIEpic
      activeStory={activeView}
      tabbar={
        viewWidth.tabletMinus
          && <Tabbar onStoryChange={onStoryChange} activeView={activeView as Pages} />
      }
    >
      <Suspense id={VIEW_STACK}>
        <Stack id={VIEW_STACK} />
      </Suspense>
      <Suspense id={VIEW_PROFILE}>
        <Profile id={VIEW_PROFILE} />
      </Suspense>
      <Suspense id={VIEW_PROJECTS}>
        <Projects id={VIEW_PROJECTS} />
      </Suspense>
      <Suspense id={VIEW_CONTACTS}>
        <Contacts id={VIEW_CONTACTS} />
      </Suspense>
    </VKUIEpic>
  );
};

export default Epic;
