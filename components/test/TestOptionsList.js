import React from 'react';
import {useHasMounted} from '../common/hooks/hasMounted';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from './styles.module.scss';
import {isQuestionNumberDefault} from './service';

const alphabetOrder = 'abcdefghijklmnopqrstuvwxyz'.split('');

const TestOptionsList = ({questionNumber, subQuestionNumber, questionOptions, answer, onOptionSelect}) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  const startIndex = 0;
  const questionLabel = alphabetOrder.slice(startIndex, startIndex + questionOptions.length);
  const value = isQuestionNumberDefault(subQuestionNumber) ? answer[subQuestionNumber] : answer;

  return (
    <ol className={isQuestionNumberDefault(subQuestionNumber) ? styles.subQuestionList : ''}>
      <RadioGroup
        aria-labelledby="test-options"
        defaultValue={value}
        value={value}
        name="test-options-group"
      >
        {
          questionOptions.map((option, index) => {
            const label = <span>{questionLabel[index]}.&nbsp;&nbsp;&nbsp;{option}</span>
            return (
              <li key={`${option}${index}`} className={styles.optionListItem}>
                <FormControlLabel
                  value={index}
                  control={<Radio/>}
                  label={label}
                  onChange={() => onOptionSelect(index, questionNumber, subQuestionNumber)}
                  className={styles.questionOptionText}
                />
              </li>
            )
          })
        }
      </RadioGroup>
    </ol>
  )
};

export default TestOptionsList;
