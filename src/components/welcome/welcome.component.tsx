//#region Imports

import { ReactElement } from 'react';
import { Avatar, Content, Description, InfoArea, Main, Subtitle, Title } from './welcome.component.styles.ts';
import profileImage from './../../assets/images/profile.jpeg';

//#endregion

export default function WelcomeComponent(): ReactElement {
  return (
    <Main>
      <Content>
        <InfoArea>
          <Title>Santiago Delgado 🌱</Title>
          <Subtitle>Desenvolvedor FullStack | TypeScript</Subtitle>

          <Description>Oi, meu nome é Santiago e sou um Desenvolvedor Web/App. Este é o meu portifólio para que possa me conhecer melhor.</Description>
        </InfoArea>

        <Avatar src={ profileImage } />
      </Content>
    </Main>
  )
}
