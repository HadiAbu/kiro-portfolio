import React from 'react'
import styles from './SkillGroup.module.css'

interface SkillGroupProps {
  category: string
  skills: string[]
}

/**
 * A bold category label followed by inline skill tags,
 * used for the Skills section on the Resume page.
 */
const SkillGroup: React.FC<SkillGroupProps> = ({ category, skills }) => {
  return (
    <div className={styles.group}>
      <h4 className={styles.category}>{category}</h4>
      <ul className={styles.tags}>
        {skills.map((skill) => (
          <li key={skill} className={styles.tag}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillGroup
