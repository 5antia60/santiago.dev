//#region Imports

import { ReactElement } from 'react';
import { Areas, Button, Main, Title } from './header.component.styles.ts';

//#endregion

export default function HeaderComponent(): ReactElement {
  return (
    <Main>
      <Title>Santiago Delgado</Title>

      <Areas>
        <Button>início</Button>
        <Button>sobre mim</Button>
        <Button>projetos</Button>
        <Button>contato</Button>
      </Areas>
    </Main>
  )
}
