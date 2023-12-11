import { Icon16HelpOutline } from '@vkontakte/icons'
import { Popover, Subhead, Text } from '@vkontakte/vkui'
import { FC } from 'react'

interface TooltipTextProps {
  text: string
  tooltipContent: string
}

const ExplanationTooltip: FC<TooltipTextProps> = ({ text, tooltipContent }) => {
  const textTooltip = (
    <Subhead
      style={{ padding: '8px 12px', color: 'var(--vkui--color_text_primary)' }}
    >
      {tooltipContent}
    </Subhead>
  )

  return (
    <Text style={{ paddingRight: 10 }}>
      {text}
      <Popover style={{ maxWidth: 220 }} trigger='hover' content={textTooltip}>
        <Icon16HelpOutline
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            position: 'relative',
            top: -1,
            color: 'var(--vkui--color_icon_secondary)',
            marginLeft: 5
          }}
        />
      </Popover>
    </Text>
  )
}

export default ExplanationTooltip
