import i18next, { i18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageEnum } from '../models/enums/language.enum.ts';

import welcomeEn from '../../resources/translation/en/welcome.json';
import aboutMeEn from '../../resources/translation/en/about-me.json';
import experienceEn from '../../resources/translation/en/experience.json';
import projectsEn from '../../resources/translation/en/projects.json';
import contactEn from '../../resources/translation/en/contact.json';
import welcomePtBR from '../../resources/translation/pt_BR/welcome.json';
import aboutMePtBR from '../../resources/translation/pt_BR/about-me.json';
import experiencePtBR from '../../resources/translation/pt_BR/experience.json';
import projectsPtBR from '../../resources/translation/pt_BR/projects.json';
import contactPtBR from '../../resources/translation/pt_BR/contact.json';

export default class I18nService {
  private readonly i18next: i18n = i18next;
  private readonly resources = {
    en: {
      welcome: welcomeEn,
      aboutMe: aboutMeEn,
      experience: experienceEn,
      projects: projectsEn,
      contact: contactEn,
    },
    pt_BR: {
      welcome: welcomePtBR,
      aboutMe: aboutMePtBR,
      experience: experiencePtBR,
      projects: projectsPtBR,
      contact: contactPtBR,
    }
  };

  constructor() {
    this.i18next.use(initReactI18next).init({
      resources: this.resources,
      lng: LanguageEnum.EN,
    });
  }

  public get i18nInstance(): i18n {
    return this.i18next;
  }

  public async changeLanguage(language: LanguageEnum): Promise<void> {
    await this.i18next.changeLanguage(language);
  }
}