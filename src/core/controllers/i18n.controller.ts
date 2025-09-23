import { i18n } from 'i18next';
import { LanguageEnum } from '../models/enums/language.enum.ts';
import I18nService from '../services/i18n.service.ts';

const i18nService = new I18nService();

export function i18nInstance(): i18n {
  return i18nService.i18nInstance;
}

export async function changeLanguage(language: LanguageEnum): Promise<void> {
  return await i18nService.changeLanguage(language);
}
