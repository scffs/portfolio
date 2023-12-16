import { Accordion, Div, Gradient, Paragraph, Spacing } from '@vkontakte/vkui'

import { gradientBorder } from './styles'

import { userStoryContent } from './data'

const UserStory = () => (
  <Gradient style={gradientBorder}>
    <Div>
      <Paragraph>
        Привет! Моё имя выше, а тут будет мелкая история о том, как и когда я
        вошёл в IT и не вышел обратно.
      </Paragraph>
      <Spacing size={16} />
      {userStoryContent.map((item) => (
        <Accordion key={item.title}>
          <Accordion.Summary iconPosition='before'>
            {item.title}
          </Accordion.Summary>
          <Accordion.Content>
            <Div>
              <Paragraph style={{ lineHeight: 1.7 }}>{item.content}</Paragraph>
            </Div>
          </Accordion.Content>
        </Accordion>
      ))}
    </Div>
  </Gradient>
)

export default UserStory
