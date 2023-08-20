import React from 'react';
import { Text, unstable_RichTooltip as RichTooltip, Subhead } from '@vkontakte/vkui';
import { Icon16HelpOutline } from '@vkontakte/icons';

interface TooltipTextProps {
  text: string;
  tooltipContent: string;
}

const ExplanationTooltip: React.FC<TooltipTextProps> = ({ text, tooltipContent }) => {
  const textTooltip = (
    <Subhead style={{ padding: '8px 12px', color: 'var(--vkui--color_text_primary)' }}>
      {tooltipContent}
    </Subhead>
  );

  return (
    <Text style={{ paddingRight: 10 }}>
      {text}
      <RichTooltip
        style={{ maxWidth: 220 }}
        content={textTooltip}
      >
        <Icon16HelpOutline
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            position: 'relative',
            top: -1,
            color: 'var(--vkui--color_icon_secondary)',
            marginLeft: 5,
          }}
        />
      </RichTooltip>
    </Text>
  );
};

export default ExplanationTooltip;
