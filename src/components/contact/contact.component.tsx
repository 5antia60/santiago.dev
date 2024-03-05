//#region Imports

import { ReactElement } from 'react';
import { SocialMediaInterface } from '../../models/interfaces/social-media.interface.ts';
import { ButtonIcon, Content, Footer, Main, MediaButton, SocialMedias } from './contact.component.styles.ts';
import GithubIconImg from './../../assets/images/github.svg';
import LinkedinIconImg from './../../assets/images/linkedin.svg';
import InstagramIconImg from './../../assets/images/logotipo-do-instagram.svg';

//#endregion

export default function ContactComponent(): ReactElement {

  //#region Properties

  const socialMedia: SocialMediaInterface[] = [
    {
      icon: LinkedinIconImg,
      redirectUrl: 'https://www.linkedin.com/in/5antiag0',
    },
    {
      icon: GithubIconImg,
      redirectUrl: 'https://github.com/5antia60',
    },
    {
      icon: InstagramIconImg,
      redirectUrl: 'https://www.instagram.com/ogsantiag0',
    },
  ];

  //#endregion

  //#region Public Methods

  const redirectTo = (redirectUrl: string): void => {
    const newTab = window.open(redirectUrl, '_blank');

    if (newTab)
      newTab.focus();
  }

  //#endregion

  return (
    <Main>
      <Content>
        <h3>Fique à vontade para entrar em contato comigo :)</h3>

        <SocialMedias>
          { socialMedia.map((media, index) =>
            <MediaButton onClick={ () => redirectTo(media.redirectUrl) } key={ index }>
              <ButtonIcon src={ media.icon } />
            </MediaButton>
          )}
        </SocialMedias>

        <Footer>
          <span>santiago.delgado2001@outlook.com</span>
          <p>Santiago Delgado 🇧🇷 2024</p>
        </Footer>
      </Content>
    </Main>
  )
}
