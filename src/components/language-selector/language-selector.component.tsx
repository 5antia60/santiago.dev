import { ReactElement } from 'react';
import { LanguageEnum } from '../../core/models/enums/language.enum.ts';
import { changeLanguage } from '../../core/controllers/i18n.controller.ts';
import { Content, FlagImg, Main, Switch, SwitchInput, SwitchSlider } from './language-selector.component.styles.ts';
import brazilImg from './../../assets/images/brasil_icon.webp';
import euaImg from './../../assets/images/eua_icon.png';

export default function LanguageSelector(): ReactElement {
  async function toggleLanguage(setEnglishLanguage: boolean): Promise<void> {
    const language = setEnglishLanguage ? LanguageEnum.PT_BR : LanguageEnum.EN;
    await changeLanguage(language);
  }

  return (
    <Main>
      <Content>
        <FlagImg src={ euaImg }/>

        <Switch>
          <SwitchInput
            type="checkbox"
            onChange={(event) => toggleLanguage(event.target.checked)}
          />
          <SwitchSlider></SwitchSlider>
        </Switch>

        <FlagImg src={ brazilImg }/>
      </Content>
    </Main>
  );
}
