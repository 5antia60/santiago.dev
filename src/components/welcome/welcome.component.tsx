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

          <Description>Meu nome é Santiago e sou um Desenvolvedor Web/App, trabalho com a criação de Front-end e Back-end de Websites e Aplicativos Web que levam ao sucesso do produto como um todo.</Description>
          <Description>Também gosto de compartilhar conteúdo relacionado ao que aprendi ao longo dos anos no Desenvolvimento Web, para que possa ajudar outras pessoas da comunidade de desenvolvimento. Fica à vontade para se conectar ou me seguir no meu LinkedIn/Github, lá eu busco compartilhar conteúdo útil relacionado ao Desenvolvimento Web e Programação.</Description>
          <Description>Estou aberto a oportunidades onde posso contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência, vou deixar dados para contato aqui tambêm :D</Description>
        </InfoArea>

        <Avatar src={ profileImage } />
      </Content>
    </Main>
  )
}
