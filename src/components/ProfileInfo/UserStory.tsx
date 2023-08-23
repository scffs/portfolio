import {
  Accordion, Div, Gradient, Header, HorizontalCell, HorizontalScroll, InfoRow, Paragraph, Spacing,
} from '@vkontakte/vkui';

import { gradientBorder, infoStyle } from './styles';

import { userInfoItems, userStoryContent } from './data';

const UserStory = () => (
  <Gradient style={gradientBorder}>
    <Header mode='secondary'>Основная информация</Header>
    <HorizontalScroll
      showArrows
      style={infoStyle}
      getScrollToLeft={(i) => i - 120}
      getScrollToRight={(i) => i + 120}
    >
      <div style={{ display: 'flex', gap: 10 }}>
        {userInfoItems.map((item) => (
          <HorizontalCell key={item.label} style={{ maxWidth: 'unset' }}>
            <InfoRow header={item.label}>{item.value}</InfoRow>
          </HorizontalCell>
        ))}
      </div>
    </HorizontalScroll>
    <Div>
      <Paragraph>
        Привет! Моё имя выше, а тут будет мелкая история о том, как и когда я вошёл в IT и не вышел обратно.
      </Paragraph>
      <Spacing size={16} />
      {userStoryContent.map((item) => (
        <Accordion key={item.title}>
          <Accordion.Summary iconPosition='before'>{item.title}</Accordion.Summary>
          <Div>
            <Paragraph style={{ lineHeight: 1.7 }}>{item.content}</Paragraph>
          </Div>
        </Accordion>
      ))}
    </Div>
  </Gradient>
);

export default UserStory;
