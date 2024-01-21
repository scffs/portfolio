import {
  useActiveVkuiLocation,
  useRouteNavigator
} from '@vkontakte/vk-mini-apps-router'
import { Panel, View } from '@vkontakte/vkui'
import { FC } from 'react'
import PanelHeaderWithBack from '../../components/PanelHeaderWithBack'
import ExplanationGroup from './StackInfo/ExplanationGroup.tsx'
import TechnologyGroup from './StackInfo/TechnologyGroup.tsx'
import {
  technologiesBackend,
  technologiesFront,
  technologiesOther
} from './StackInfo/data.ts'

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
