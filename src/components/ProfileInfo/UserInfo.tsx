import {
  Avatar,
  Gradient,
  Group,
  Header,
  HorizontalCell,
  HorizontalScroll,
  InfoRow,
  Link,
  Title
} from '@vkontakte/vkui'

import { gradientBorder, infoStyle, styles } from './styles'

import ava from '../../assets/avaSmall.jpg'

import { VK_URL } from '../../constants'
import { userInfoItems } from './data.tsx'

const UserInfo = () => (
  <>
    <Gradient style={{ ...styles, ...gradientBorder }}>
      <Avatar size={90} src={ava} alt='ava' />
      <Title style={{ marginTop: 20 }} level='2' weight='2' Component='h2'>
        Семён Окулов
      </Title>
      <Link href={VK_URL} target='_blank'>
        @scffs
      </Link>
      <Title level='3' weight='3' Component='h3'>
        Fullstack-разработчик
      </Title>
    </Gradient>
    <Header mode='secondary'>Основная информация</Header>
    <Group mode='plain'>
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
    </Group>
  </>
)

export default UserInfo
