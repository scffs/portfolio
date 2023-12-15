import {
  useActiveVkuiLocation,
  useRouteNavigator
} from '@vkontakte/vk-mini-apps-router'
import { Panel, View } from '@vkontakte/vkui'
import { FC } from 'react'

import PanelHeaderWithBack from '../components/PanelHeaderWithBack'
import ExplanationGroup from '../components/StackInfo/ExplanationGroup'

import TechnologyGroup from '../components/StackInfo/TechnologyGroup'
import {
  technologiesBackend,
  technologiesFront,
  technologiesOther
} from '../components/StackInfo/data'

const Stack: FC<{ id: string }> = ({ id }) => {
  const { panel: activePanel, panelsHistory } = useActiveVkuiLocation()

  const routeNavigator = useRouteNavigator()
  return (
    <View
      id={id}
      history={panelsHistory}
      activePanel={activePanel}
      onSwipeBack={() => routeNavigator.back()}
    >
      <Panel nav={id}>
        <PanelHeaderWithBack title='Стэк' />
        <ExplanationGroup />
        <TechnologyGroup
          id='frontend'
          title='Frontend'
          draggingList={technologiesFront}
        />
        <TechnologyGroup
          id='backend'
          title='Backend'
          draggingList={technologiesBackend}
        />
        <TechnologyGroup
          id='other'
          title='Other'
          draggingList={technologiesOther}
        />
      </Panel>
    </View>
  )
}

export default Stack
