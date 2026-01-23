import React from 'react';
import styles from './styles.module.scss';
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import loader from '../../../../common/loader/loader';
import { useHasMounted } from '../../../../common/hooks/hasMounted';
import CaseStudyTag from './components/CaseStudyTag';
import { X } from '@phosphor-icons/react';
import * as CaseStudyComponents from './components/CaseStudiesContent';

const ModalComponent = ({ isModalOpen, data, toggleModal }) => {
  const hasMounted = useHasMounted();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (!hasMounted || !isModalOpen) {
    return null;
  }

  const width = 902;
  const height = Math.round(width / 3.5);
  const CaseStudyComponent = CaseStudyComponents[data.Component];

  return (
    <Dialog
      onClose={toggleModal}
      open={isModalOpen}
      maxWidth={'md'}
      fullScreen={fullScreen}
      className={`${styles.dialog}`}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark backdrop with 70% opacity
          },
        },
      }}
    >
      <DialogContent className={styles.modalContent}>
        <Box
          sx={{
            padding: 0,
            position: 'relative',
          }}
        >
          <img
            src={loader({
              src: data.imageModalHeader,
              width: width,
            })}
            alt={data.title}
            width={width}
            height={height}
            style={{
              height: 'auto',
              maxHeight: height,
              width: '100%',
              objectFit: 'cover',
            }}
          />
          <Typography className={`${styles.modalTitle}`}>{data.title}</Typography>
          <CaseStudyTag
            tagName={data.tagName}
            tagColor={data.tagColor}
          />
          <IconButton
            aria-label="close"
            onClick={toggleModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[500],
            }}
          >
            <X />
          </IconButton>
        </Box>
        <DialogContentText
          className={styles.modalContentText}
          component={Box}
        >
          <CaseStudyComponent data={data} />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
