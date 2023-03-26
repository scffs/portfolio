import React, {lazy, Suspense} from 'react';

import s from './NotFound.module.scss';

import Loading from '../../components/Loading/Loading.jsx';

const ButtonToHome = lazy(() => import('../../components/UI/ButtonToHome/ButtonToHome'));

const NotFound = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <div className={s.block}>
        <div>
          <h1 className={s.title}>404</h1>
          <p className={s.text}>Страница не найдена!</p>
        </div>
        <ButtonToHome text="На главную"/>
      </div>
    </Suspense>
  );
};

export default NotFound;