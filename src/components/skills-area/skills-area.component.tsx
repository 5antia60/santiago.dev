//#region Imports

import { ReactElement } from 'react';
import { SkillTitle, Pill, PillsArea, Skills, SkillsArea } from './skills-area.component.styles.ts';
import { SkillsAreaInterface } from '../../models/interfaces/skills-area.interface.ts';

//#endregion

export default function SkillsAreaComponent(props: SkillsAreaInterface): ReactElement {
  return (
    <Skills>
      <SkillsArea>
        { !props.showOnlySkills &&
          <SkillTitle>Minhas habilidades...</SkillTitle>
        }

        <PillsArea>
          { props.skillsList.map(s => <Pill>{ s }</Pill>) }
        </PillsArea>
      </SkillsArea>

      { !props.showOnlySkills &&
        <SkillsArea>
          <SkillTitle>Outros conhecimentos..</SkillTitle>

          <PillsArea>
            { props?.knowledgeList?.map(k => <Pill>{ k }</Pill>) }
          </PillsArea>
        </SkillsArea>
      }
    </Skills>
  )
}
