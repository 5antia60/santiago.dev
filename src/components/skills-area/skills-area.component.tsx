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
          <SkillTitle>My skills...</SkillTitle>
        }

        <PillsArea>
          { props.skillsList.map((s, index) => <Pill key={ index }>{ s }</Pill>) }
        </PillsArea>
      </SkillsArea>

      { !props.showOnlySkills &&
        <SkillsArea>
          <SkillTitle>Other knowledges..</SkillTitle>

          <PillsArea>
            { props?.knowledgeList?.map((k, index) => <Pill key={ index }>{ k }</Pill>) }
          </PillsArea>
        </SkillsArea>
      }
    </Skills>
  )
}
