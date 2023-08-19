import { FC, useState } from 'react';

import { Button, ButtonGroup, ModalCard } from '@vkontakte/vkui';

const phrases: string[] = [
  'Fullstack разработчик – маг программирования: может и спереди, и сзади!',
  'Fullstack разработчик – мастер всего, от "Hello World" до "404: Что вы натворили?"',
  'Fullstack разработчик: человек, способный готовить и печь пироги одновременно.',
  'Fullstack разработчик: человек, который готов к бэкенду на завтрак и фронтенду на ужин.',
  'Fullstack разработчик: маг веб-вселенной, кодит и фронт, и бэк, а в выходные - котик.',
];

const FullstackModal: FC<{ id: string }> = ({ id }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const changePhrase = () => {
    const newIndex = currentPhraseIndex + 1;
    setCurrentPhraseIndex(newIndex);
    setButtonDisabled(newIndex === phrases.length - 1);
  };

  const buttonGroup = (
    <ButtonGroup mode='vertical' stretched>
      <Button
        size='l'
        mode='primary'
        stretched
        onClick={changePhrase}
        disabled={buttonDisabled}
      >
        {buttonDisabled ? 'Фразы кончились :(' : 'Поменять определение'}
      </Button>
    </ButtonGroup>
  );

  return (
    <ModalCard
      id={id}
      header='Fullstack-разработчик'
      subheader={`${phrases[currentPhraseIndex]}`}
      actions={buttonGroup}
    />
  );
};

export default FullstackModal;
