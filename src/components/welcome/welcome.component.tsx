//#region Imports

import { ReactElement } from 'react';
import { Avatar, Content, Description, InfoArea, Main, Title } from './welcome.component.styles.ts';
import profileImage from './../../assets/images/profile.jpeg';

//#endregion

export default function WelcomeComponent(): ReactElement {
  return (
    <Main>
      <Content>
        <InfoArea>
          <Title>Santiago Delgado</Title>

          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis vel dui non placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Description>
        </InfoArea>

        <Avatar src={ profileImage } />
      </Content>
    </Main>
  )
}
