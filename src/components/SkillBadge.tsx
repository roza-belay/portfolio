import { FaCode } from 'react-icons/fa6';
import { skillIcons } from '../data/portfolioData';

import './styles/SkillBadge.css';

export default function SkillBadge({ skill }: { skill: string }) {
  const Icon = skillIcons[skill as keyof typeof skillIcons] ?? FaCode;

  return (
    <span className="skill-badge">
      <Icon aria-hidden="true" />
      {skill}
    </span>
  );
}
