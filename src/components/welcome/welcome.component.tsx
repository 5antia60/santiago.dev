//#region Imports

import { ReactElement } from 'react';
import { Avatar, Content, Description, InfoArea, Main, Subtitle, Title } from './welcome.component.styles.ts';
import profileImg from './../../assets/images/profile.jpeg';

//#endregion

export default function WelcomeComponent(): ReactElement {
  return (
    <Main>
      <Content>
        <InfoArea>
          <Title>Santiago Delgado</Title>
          <Subtitle>FullStack Developer | Typescript</Subtitle>

          <Description>Hi, my name is Santiago and I am a Web/App Developer. This is my portfolio so you can get to know me better.</Description>
        </InfoArea>

        <Avatar src={ profileImg } />
      </Content>
    </Main>
  )
}
