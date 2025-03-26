import { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  function calculateTimeLeft() {
    const targetDate = new Date('2025-04-16T08:00:00');
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: isMobile ? '90%' : '800px',
        mx: 'auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 3 },
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(156, 39, 176, 0.2)',
          }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 2,
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 500,
            }}
          >
            Event Begins In
          </Typography>

          <Grid container spacing={2} justifyContent="space-between" sx={{ maxWidth: '100%', mx: 'auto' }}>
            {timeUnits.map((unit) => (
              <Grid item xs={2.7} key={unit.label}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      width: '100%',
                      aspectRatio: '1/1',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      bgcolor: 'rgba(18, 18, 18, 0.95)',
                      border: '2px solid rgba(156, 39, 176, 0.4)',
                      borderRadius: '16px',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(156, 39, 176, 0.15)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 12px 40px rgba(156, 39, 176, 0.25)',
                        border: '2px solid rgba(156, 39, 176, 0.6)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(156, 39, 176, 0.5), transparent)',
                      },
                    }}
                  >
                    <Typography
                      variant={isMobile ? 'h3' : 'h1'}
                      sx={{
                        fontWeight: 800,
                        color: theme.palette.primary.main,
                        fontFamily: "'Space Grotesk', sans-serif",
                        textShadow: '0 0 20px rgba(156, 39, 176, 0.5)',
                        letterSpacing: '0.05em',
                        transform: 'scale(0.95)',
                        transition: 'transform 0.3s ease, color 0.3s ease',
                        fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                        '&:hover': {
                          transform: 'scale(1)',
                          color: theme.palette.primary.light
                        }
                      }}
                    >
                      {unit.value !== undefined ? String(unit.value).padStart(2, '0') : '00'}
                    </Typography>
                  </Paper>
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {unit.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default CountdownTimer;