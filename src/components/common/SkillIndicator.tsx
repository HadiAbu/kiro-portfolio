import React from 'react'
import styles from './SkillIndicator.module.css'

export interface SkillIndicatorProps {
  skillName: string
  proficiency: number // 0-100
  color?: string
}

/**
 * SkillIndicator component displays a skill name with a visual progress bar
 * indicating proficiency level. Implements WCAG AA accessibility standards.
 *
 * @param skillName - The name of the skill to display
 * @param proficiency - Proficiency level from 0 to 100
 * @param color - Optional custom color for the progress bar fill
 */
const SkillIndicator: React.FC<SkillIndicatorProps> = ({ skillName, proficiency, color }) => {
  // Ensure proficiency is within valid range
  const validProficiency = Math.min(Math.max(proficiency, 0), 100)

  return (
    <div className={styles.skillIndicator}>
      <div className={styles.labelContainer}>
        <span className={styles.skillName}>{skillName}</span>
        <span className={styles.proficiencyValue}>{validProficiency}%</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{
            width: `${validProficiency}%`,
            backgroundColor: color,
          }}
          role="progressbar"
          aria-valuenow={validProficiency}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skillName} proficiency: ${validProficiency}%`}
        />
      </div>
    </div>
  )
}

export default SkillIndicator
