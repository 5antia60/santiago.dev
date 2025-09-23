//#region Imports

import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { NamespaceEnum } from '../../core/models/enums/namespace.enum.ts';
import { Avatar, Content, Description, InfoArea, Main, Subtitle, Title } from './welcome.component.styles.ts';
import profileImg from './../../assets/images/profile.jpg';

//#endregion

export default function WelcomeComponent(): ReactElement {
  const { t } = useTranslation(NamespaceEnum.WELCOME);

  return (
    <Main>

      <Content>
        <InfoArea>
          <Title>Santiago Delgado</Title>
          <Subtitle>{ t('Software Developer | Typescript') }</Subtitle>

          <Description>{ t('Hi, my name is Santiago and I am a Web/App Developer. This') }</Description>
        </InfoArea>

        <Avatar src={ profileImg } />
      </Content>
    </Main>
  )
}
