import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const TimerCircle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '350px',
  height: '350px',
  borderRadius: '50%',
  border: '20px solid #aaa',
  position: 'relative',
  backgroundColor: '#f9f9f9',
  [theme.breakpoints.down('sm')]: {
    width: '120px',
    height: '120px',
  },
}));

const TimerText = styled(Typography)(({ theme }) => ({
  fontSize: '50px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  },
}));

const FastingLabel = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  position: 'absolute',
  bottom: '50px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

const FastingTracker: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isFasting, setIsFasting] = useState<boolean>(false);
  const [lastFastTime, setLastFastTime] = useState<number>(0);
  const [goalHours, setGoalHours] = useState<number>(16);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const formatCountdown = (seconds: number) => {
    const totalSeconds = goalHours * 3600 - seconds;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `Just ${hours}h ${minutes}m more`;
  };

  const handleStartFast = () => {
    if (isFasting) {
      setLastFastTime(time);
    }
    setIsFasting(!isFasting);
    setTime(0);
  };

  const handleAddHour = () => {
    setGoalHours(prevGoal => prevGoal + 1);
  };

  const handleRemoveHour = () => {
    setGoalHours(prevGoal => (prevGoal > 1 ? prevGoal - 1 : 1));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <TimerCircle>
        <TimerText>{formatTime(isFasting ? time : lastFastTime)}</TimerText>
        <FastingLabel>
          {isFasting ? formatCountdown(time) : 'Since Last Fast'}
        </FastingLabel>
      </TimerCircle>
      <Box display="flex" alignItems="center" mt={2}>
        <IconButton
          onClick={handleRemoveHour}
          sx={{ backgroundColor: '#f0f0f0', '&:hover': { backgroundColor: '#e0e0e0' }, borderRadius: '50%', margin: '0 10px' }}
        >
          <RemoveIcon />
        </IconButton>
        <Typography variant="h6" mx={2}>{goalHours} hours</Typography>
        <IconButton
          onClick={handleAddHour}
          sx={{ backgroundColor: '#f0f0f0', '&:hover': { backgroundColor: '#e0e0e0' }, borderRadius: '50%', margin: '0 10px' }}
        >
          <AddIcon />
        </IconButton>
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4, px: 4 }}
        onClick={handleStartFast}
      >
        {isFasting ? "End Fast" : "Let's Fast!"}
      </Button>
    </Box>
  );
};

export default FastingTracker;
