//#region Imports

import { ReactElement } from 'react';
import { Main } from './home.page.styles.tsx';
import WelcomeComponent from '../../components/welcome/welcome.component.tsx';

//#endregion

export default function HomePage(): ReactElement {
  return (
    <Main>
      <WelcomeComponent />
    </Main>
  )
}
