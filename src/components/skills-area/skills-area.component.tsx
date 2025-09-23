//#region Imports

import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { NamespaceEnum } from '../../core/models/enums/namespace.enum.ts';
import { SkillTitle, Pill, PillsArea, Skills, SkillsArea } from './skills-area.component.styles.ts';
import { SkillsAreaInterface } from '../../core/models/interfaces/skills-area.interface.ts';

//#endregion

export default function SkillsAreaComponent(props: SkillsAreaInterface): ReactElement {
  const { t } = useTranslation(NamespaceEnum.ABOUT_ME);

  return (
    <Skills>
      <SkillsArea>
        { !props.showOnlySkills &&
          <SkillTitle>{ t('My skills') }</SkillTitle>
        }

        <PillsArea>
          { props.skillsList.map((s, index) => <Pill key={ index }>{ s }</Pill>) }
        </PillsArea>
      </SkillsArea>

      { !props.showOnlySkills &&
        <SkillsArea>
          <SkillTitle>{ t('Other knowledge') }</SkillTitle>

          <PillsArea>
            { props?.knowledgeList?.map((k, index) => <Pill key={ index }>{ k }</Pill>) }
          </PillsArea>
        </SkillsArea>
      }
    </Skills>
  )
}
