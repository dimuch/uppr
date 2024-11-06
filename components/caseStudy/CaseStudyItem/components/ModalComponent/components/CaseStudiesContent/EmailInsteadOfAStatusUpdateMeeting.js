import React from 'react';
import { List, ListItem, ListItemText, Typography, Stack, Box } from '@mui/material';
import { Circle } from '@phosphor-icons/react';
import loader from '../../../../../../common/loader/loader';
import { useHasMounted } from '../../../../../../common/hooks/hasMounted';
import styles from './caseStudiesGenericStyles.module.scss';

const EmailInsteadOfAStatusUpdateMeeting = ({ data }) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  const width = 902;
  const height = Math.round(width / 3.5);

  return (
    <Box className={styles.caseStudyContent}>
      <Typography component="p">
        Зустрічі - це довго та дорого, і ще досить часто непродуктивно. Ніби фізично усі присутні на ранковому
        catch-up/check-in/stand-up (чи як це у вас називається), але &quot;вткнувшись&quot; в екрани гаджетів, зависають
        у соціалках чи чатяться з колегами по робочим питанням (в кращому випадку). Знайомо таке?
      </Typography>
      <Typography className={styles.sectionCaption}>Якщо можна написати імейл — напишіть його!</Typography>
      <Typography component="p">
        Тому, якщо коли можна написати імейл і уникнути ще одного міта (і заощадити час та гроші) — зробіть це!
      </Typography>
      <Typography component="p">Щоденний sync-up meet, можна легко замінити на:</Typography>
      <img
        src={loader({
          src: data.imageModal,
          width: width,
        })}
        alt={data.title}
        width={width}
        height={height}
        style={{
          height: 'auto',
          width: '100%',
          marginTop: '1rem',
          marginBottom: '2rem',
        }}
      />

      <Typography
        component="p"
        sx={{
          fontStyle: 'italic',
          marginBottom: '0 !important',
        }}
      >
        Pro TIPS
      </Typography>

      <List>
        <ListItem
          key={1}
          alignItems="center"
          sx={{
            padding: '0 0 0 16px',
          }}
        >
          <ListItemText
            primary={
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="start"
              >
                <Circle
                  size={12}
                  weight="fill"
                  style={{
                    marginTop: '8px',
                  }}
                />
                <Typography component={'p'}>
                  Напишіть action items на початку імейлу, оскільки вони важливіші, ніж апдейти.
                </Typography>
              </Stack>
            }
          />
        </ListItem>
        <ListItem
          key={2}
          alignItems="center"
          sx={{
            padding: '0 0 0 16px',
          }}
        >
          <ListItemText
            primary={
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="start"
              >
                <Circle
                  size={12}
                  weight="fill"
                  style={{
                    marginTop: '8px',
                  }}
                />
                <Typography component={'p'}>
                  Імена відповідальних варто зробити bold чи ще якось виділити, щоб точно звернули увагу.
                </Typography>
              </Stack>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default EmailInsteadOfAStatusUpdateMeeting;
