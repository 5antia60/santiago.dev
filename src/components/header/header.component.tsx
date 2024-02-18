//#region Imports

import { ReactElement } from 'react';
import { Areas, Button, Main, Title } from './header.component.styles.ts';

//#endregion

export default function HeaderComponent(): ReactElement {
  return (
    <Main>
      <Title>Santiago Delgado</Title>

      <Areas>
        <Button>home</Button>
        <Button>about</Button>
        <Button>projects</Button>
        <Button>contact</Button>
      </Areas>
    </Main>
  )
}
