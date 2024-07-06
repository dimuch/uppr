import React from 'react';
import { useHasMounted } from '../common/hooks/hasMounted';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from './styles.module.scss';
import { isQuestionNumberDefault } from './service';

const alphabetOrder = 'abcdefghijklmnopqrstuvwxyz'.split('');

const TestOptionsList = ({
  questionNumber,
  subQuestionNumber,
  questionOptions,
  answer,
  correctAnswer,
  onOptionSelect,
}) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  const startIndex = 0;
  const questionLabel = alphabetOrder.slice(startIndex, startIndex + questionOptions.length);
  const isDefault = isQuestionNumberDefault(subQuestionNumber);
  const value = isDefault ? parseInt(answer[subQuestionNumber]) : parseInt(answer);
  const correctValue = isDefault ? parseInt(correctAnswer[subQuestionNumber]) : parseInt(correctAnswer);

  return (
    <ol className={isDefault ? styles.subQuestionList : ''}>
      <RadioGroup aria-labelledby="test-options" defaultValue={value} value={value} name="test-options-group">
        {questionOptions.map((option, index) => {
          const label = (
            <span>
              {questionLabel[index]}.&nbsp;&nbsp;&nbsp;{option}
            </span>
          );
          let listItemClassname = styles.optionListItem;
          if (correctValue !== -1) {
            if (correctValue !== value && value === index) {
              listItemClassname = `${styles.optionListItem} ${styles.optionListItemWrong}`;
            }
            if (correctValue === index) {
              listItemClassname = `${styles.optionListItem} ${styles.optionListItemCorrect}`;
            }
          }
          return (
            <li key={`${option}${index}`} className={listItemClassname}>
              <FormControlLabel
                value={index}
                control={<Radio />}
                label={label}
                onChange={() => onOptionSelect(index, questionNumber, subQuestionNumber)}
                className={styles.questionOptionText}
              />
            </li>
          );
        })}
      </RadioGroup>
    </ol>
  );
};

export default TestOptionsList;
