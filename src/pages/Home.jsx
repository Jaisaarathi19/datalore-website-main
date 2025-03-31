import { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Button, 
  Card, 
  CardContent, 
  CardMedia,
  CardActions,
  Divider,
  Avatar,
  Chip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link as RouterLink } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CodeIcon from '@mui/icons-material/Code';
import CountdownTimer from '../components/common/CountdownTimer';
import { DEFAULT_PROFILE_IMAGE } from '../constants/images';

const Home = () => {
  const guest = {
    name: "Dr. Emily Chen",
    designation: "Chief Innovation Officer",
    image: DEFAULT_PROFILE_IMAGE,
    description: "A pioneering researcher in quantum computing with over 15 years of experience. Leading groundbreaking projects in quantum algorithms and their applications in cryptography. Known for developing novel approaches to quantum error correction. Regular speaker at international technology conferences. Recipient of multiple awards for contributions to quantum computing advancement."
  };

  const organizers = [
    {
      name: "Dr. J.M Gnanesekaran",
      role: "Head of Department",
      department: "Artificial Intelligence and Data Science",
      image: DEFAULT_PROFILE_IMAGE,
      expertise: ['AI Research', 'Data Analytics', 'Machine Learning']
    },
    {
      name: "Dr. S.Suresh Kumar",
      role: "Associate Professor",
      department: "Artificial Intelligence and Data Science",
      image: "/assets/images/suresh kumar.jpg",
      expertise: ['Deep Learning', 'Computer Vision', 'Pattern Recognition']
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          py: { xs: 4, md: 8 }
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            background: 'linear-gradient(45deg, #9C27B0 30%, #BA68C8 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 3
          }}
        >
          Welcome to Datalore '25
        </Typography>
        <Typography 
          variant="h5" 
          color="text.secondary" 
          sx={{ 
            mb: 4, 
            maxWidth: 'sm', 
            mx: 'auto',
            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
            lineHeight: 1.6,
            opacity: 0.9
          }}
        >
          Join us for an extraordinary journey into the future of technology
        </Typography>
        <CountdownTimer />
      </Box>
      
      {/* Chief Guest Section */}
      <Box sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            background: 'linear-gradient(45deg, #9C27B0 30%, #BA68C8 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}
        >
          Chief Guest
        </Typography>
        <Card
          component={motion.div}
          whileHover={{ y: -10, boxShadow: '0 12px 40px rgba(156, 39, 176, 0.25)' }}
          sx={{ 
            background: 'rgba(18, 18, 18, 0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(156, 39, 176, 0.2)',
            borderRadius: 4,
            overflow: 'hidden',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(156, 39, 176, 0.5), transparent)'
            },
            transition: 'all 0.4s ease-in-out'
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
              <Box sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  top: '10%',
                  height: '80%',
                  width: '1px',
                  background: 'linear-gradient(to bottom, transparent, rgba(156, 39, 176, 0.3), transparent)',
                  display: { xs: 'none', md: 'block' }
                }
              }}>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: '350px',
                    aspectRatio: '1',
                    position: 'relative',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid rgba(156, 39, 176, 0.3)',
                    boxShadow: '0 8px 32px rgba(156, 39, 176, 0.2)'
                  }}
                >
                  <CardMedia
                    component="img"
                    image={guest.image}
                    alt={guest.name}
                    sx={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(20%)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mt: 3,
                    mb: 1,
                    color: '#fff',
                    fontWeight: 600,
                    textAlign: 'center',
                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                  }}
                >
                  {guest.name}
                </Typography>
                <Typography 
                  variant="subtitle1"
                  sx={{ 
                    color: 'primary.main',
                    fontWeight: 500,
                    textAlign: 'center',
                    letterSpacing: '0.5px',
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                    opacity: 0.9
                  }}
                >
                  {guest.designation}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <CardContent 
                sx={{ 
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                    lineHeight: 1.8,
                    textAlign: 'justify',
                    position: 'relative',
                    '&::before': {
                      content: '"\u201C"',
                      fontSize: { xs: '3rem', sm: '3.5rem', md: '4rem' },
                      color: 'rgba(156, 39, 176, 0.2)',
                      position: 'absolute',
                      left: -10,
                      top: -20
                    }
                  }}
                >
                  {guest.description}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Faculty Coordinators Section */}
      <Box sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            background: 'linear-gradient(45deg, #9C27B0 30%, #BA68C8 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}
        >
          Faculty Coordinators
        </Typography>

        <Grid container spacing={4}>
          {organizers.map((coordinator, index) => (
            <Grid item xs={12} sm={6} key={coordinator.name}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    p: 3,
                    background: 'rgba(18, 18, 18, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(156, 39, 176, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '1px solid rgba(156, 39, 176, 0.2)',
                      boxShadow: '0 8px 30px rgba(156, 39, 176, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', mb: 3 }}>
                    <Avatar
                      src={coordinator.image}
                      alt={coordinator.name}
                       sx={{
                        width: { xs: 300, sm: 320, md: 340 },
                        height: { xs: 300, sm: 320, md: 340 },
                        mx: 'auto',
                        border: '3px solid',
                        borderColor: 'primary.main',
                        boxShadow: '0 8px 32px rgba(156, 39, 176, 0.2)',
                        transition: 'all 0.3s ease-in-out',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        background: 'linear-gradient(145deg, rgba(18, 18, 18, 0.8), rgba(9, 9, 9, 0.9))',
                        borderRadius: '50%',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 12px 40px rgba(156, 39, 176, 0.3)'
                        }
                      }}
                    />
                  </Box>

                  <Typography variant="h3" align="center" gutterBottom>
                    {coordinator.name}
                  </Typography>
                  <Typography variant="subtitle1" align="center" color="primary.main" gutterBottom>
                    {coordinator.role}
                  </Typography>
                  <Typography variant="body2" align="center" color="text.secondary" gutterBottom>
                    {coordinator.department}
                  </Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2, flexWrap: 'wrap' }}>
                    {coordinator.expertise.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: 'primary.main' }}
                      />
                    ))}                    
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;