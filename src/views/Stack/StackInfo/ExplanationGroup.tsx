import { Div, Group, Header } from '@vkontakte/vkui'
import ExplanationTooltip from '../../../components/ExplanationTooltip.tsx'

const ExplanationGroup = () => (
  <Group header={<Header>Пояснение</Header>}>
    <Div style={{ display: 'flex' }}>
      <ExplanationTooltip text='Beginner' tooltipContent='Базовые знания' />
      <ExplanationTooltip
        text='Intermediate'
        tooltipContent='Хорошие знания и небольшой опыт использования'
      />
      <ExplanationTooltip text='Advanced' tooltipContent='Продвинутые знания' />
    </Div>
  </Group>
)

export default ExplanationGroup
