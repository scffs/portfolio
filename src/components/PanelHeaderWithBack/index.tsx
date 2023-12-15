import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'
import { FC } from 'react'

const PanelHeaderWithBack: FC<{ title: string }> = ({ title }) => {
  const routeNavigator = useRouteNavigator()
  return (
    <PanelHeader
      before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
    >
      {title}
    </PanelHeader>
  )
}

export default PanelHeaderWithBack
