import {Typography} from '@mui/material';

const DUMMY_COMPONENT = () => <></>;
export const CHUNK = 4;
export const QUESTIONS_QUANTITY = 12;
export const TEST_ANSWERS = [2, 1, 3, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 0, 3];
export const DEFAULT_TEST_ANSWER = -1;

const LEVELS = {
 'Yoyryk' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In egestas erat imperdiet sed euismod nisi porta. Dui ut ornare lectus sit amet est placerat in egestas. Tincidunt nunc pulvinar sapien et. Dictum non consectetur a erat nam at lectus urna duis. Nibh venenatis cras sed felis. Adipiscing commodo elit at imperdiet. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Egestas egestas fringilla phasellus faucibus scelerisque. Et egestas quis ipsum suspendisse ultrices gravida. Egestas congue quisque egestas diam in. Gravida rutrum quisque non tellus orci ac auctor.',
 'Boryk' : 'Odio tempor orci dapibus ultrices in iaculis nunc sed. Nam libero justo laoreet sit amet cursus sit amet dictum. Pretium nibh ipsum consequat nisl. Maecenas accumsan lacus vel facilisis volutpat. Sit amet cursus sit amet dictum sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Ut ornare lectus sit amet est placerat. Interdum velit euismod in pellentesque massa placerat duis ultricies.',
 'Proffi' : 'Velit scelerisque in dictum non consectetur a erat nam at. Erat velit scelerisque in dictum non consectetur. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Ultricies mi quis hendrerit dolor magna eget est. At imperdiet dui accumsan sit. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Lorem ipsum dolor sit amet consectetur adipiscing. Rutrum tellus pellentesque eu tincidunt tortor. Sagittis orci a scelerisque purus semper eget duis at. Mauris in aliquam sem fringilla. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Mi proin sed libero enim sed faucibus turpis in eu. Ut sem nulla pharetra diam sit amet nisl suscipit.',
}


export const DEFAULT_ANSWERS = new Array(QUESTIONS_QUANTITY).fill([DEFAULT_TEST_ANSWER]);

export const DEFAULT_TEST_RESULT = {
  message: '',
  title: '',
  isTestSubmitted: false,
}
export const getLevelParams = (level) => LEVELS[level];

export const isQuestionNumberDefault = (subQuestionNumber) => (
  subQuestionNumber !== DEFAULT_TEST_ANSWER
);

import styles from './styles.module.scss';
export const emailEffectivenessTest = () => {
  const questions = [
    {
      questionTitle: 'Choose the best subject line for the following email:',
      questionBody: () => (
        <p className={styles.questionBody}>
          <i>
            Hi Julie,
            <br/>
            <br/>
            Big thanks for your job.
            <br/>
            I carefully examined the mockup and have several concerns. When can we discuss them?
          </i>
        </p>
      ),
      questionOptions: [
        'Mockup',
        'Design mockup',
        'Discussion of the mockup',
        'Great job',
      ],
    },
    {
      questionTitle: 'Choose the best opening for the email about recent updates.',
      questionBody: DUMMY_COMPONENT,
      questionOptions: [
        'Just a quick note to let you know …',
        'The update is …',
        'I am writing to inform you …',
        'I’ve received your email …',
      ],
    },
    {
      questionTitle: 'What is the most efficient way to inform your reader about the attachment?',
      questionBody: DUMMY_COMPONENT,
      questionOptions: [
        'Attached you will find [ the new price list].',
        'Please find attached [the new price list].',
        'I’ve attached for you [the new price list].',
        'Here is [the new price list].',
      ],
    },
    {
      questionTitle: 'Which is a better social opening?',
      questionBody: DUMMY_COMPONENT,
      questionOptions: [
        'How are you doing?',
        'Hope you made the most of the gardening weather this weekend.',
        'Hope you are well.',
        'How was your holiday?',
      ],
    },
    {
      questionTitle: 'Choose a more effective option to refer to a morning call',
      questionBody: DUMMY_COMPONENT,
      questionOptions: [
        'As per our call this morning…',
        'Thank you for calling me today.',
        'Further to our call this morning.',
        'Thank you so much. It was such a pleasure to talk to you today.',
      ],
    },
    {
      questionTitle: 'Choose the best CTA (Call To Action).',
      questionBody: DUMMY_COMPONENT,
      questionOptions: [
        'Can you please have a look at my presentation?',
        'Would love your feedback on my presentation asap.',
        'Could you please feedback on my presentation by [day]? I’d especially need your input on the stats included on slide four.',
        'Please share your thoughts about my presentation.',
      ],
    },
    {
      questionTitle: 'Which is the better way to inform a customer about a mistake?',
      questionBody: DUMMY_COMPONENT,
      questionOptions: [
        'My colleague has made a mistake.',
        'The mistake occurred.',
      ],
    },
    {
      questionTitle: 'What is the more effective and polite way to inform about the urgency?',
      questionBody: DUMMY_COMPONENT,
      questionOptions: [
        'Asap, please.',
        'Is [date and time] achievable for [task]?',
        'It’s urgent!',
        'This is time-sensitive.',
      ],
    },
    {
      questionTitle: 'Which is a more polite way to follow up with a colleague?',
      questionBody: DUMMY_COMPONENT,
      questionOptions: [
        'Do you have those answers for me? Per my last email, the deadline was this morning.',
        'Do you have time (today) to complete [the task]?',
        'Can you please reply to my last email?',
        'I (badly) need your edits in order to move forward.',
      ],
    },
    {
      questionTitle: 'Which email can be more time-effective?',
      questionBody: DUMMY_COMPONENT,
      questionOptions: [
        'Let’s launch the new campaign on Thursday. What do you, guys, think? Open to your ideas!',
        'It seems like launching the new campaign on Thursday is the best option for everybody. Hope you are all Ok with that.',
      ],
    },
    {
      questionTitle: 'Which is more efficient and/or polite? Choose one of the pair.',
      questionBody: DUMMY_COMPONENT,
      isComplex: true,
      questionOptions: [
        {
          questionTitle: null,
          questionBody: DUMMY_COMPONENT,
          questionOptions: [
            'Thank you for your prompt reply.',
            'Hope for your prompt reply.',
          ],
        },
        {
          questionTitle: null,
          questionBody: DUMMY_COMPONENT,
          questionOptions: [
            'Can we please change the timing of our meeting? If 2 p.m. works for you, that would be great for me as well.',
            'Unfortunately, we need to reschedule the meeting.',
          ],
        },
        {
          questionTitle: null,
          questionBody: DUMMY_COMPONENT,
          questionOptions: [
            'I am planning to do/ …. Is that okay?',
            'Let me know if you have a different opinion.',
          ],
        },
        {
          questionTitle: null,
          questionBody: DUMMY_COMPONENT,
          questionOptions: [
            'When are you available on Monday?',
            'I would like to know when you are available on Monday.',
          ],
        },
      ],
    },
    {
      questionTitle: 'Choose the best email closing line.',
      questionBody: DUMMY_COMPONENT,
      questionOptions: [
        'Do not hesitate to contact me if you have any questions.',
        'Feel free to contact me, in case you have questions.',
        'Feel welcome to ask any question that comes to your mind.',
        'Let me know if I can do anything else for you.',
      ],
    },
  ];
  const dividedItemsBy4 = get4items([], questions);
  return dividedItemsBy4;
}

const get4items = (dividedItems = [], items = []) => {
  if (!items.length) {
    return dividedItems;
  }
  dividedItems.push(items.splice(0, CHUNK));
  return get4items(dividedItems, items);
}
