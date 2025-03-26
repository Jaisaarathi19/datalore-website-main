import { Box, Container, Grid, Typography, Card, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/common/SectionHeading';
import { DEFAULT_PROFILE_IMAGE } from '../constants/images';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Symposium Chair',
      image: DEFAULT_PROFILE_IMAGE, // Fixed typo here
      bio: 'Leading AI researcher with 15 years of experience in machine learning.',
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Technical Director',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Expert in quantum computing and emerging technologies.',
    },
    {
      name: 'Dr. Emily Brown',
      role: 'Research Lead',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Specializing in robotics and autonomous systems.',
    }
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="About Symposium 2024"
          subtitle="Advancing the Future of Technology"
        />

        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" gutterBottom sx={{
                background: 'linear-gradient(135deg, #fff 0%, #9C27B0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Shaping Tomorrow's Innovation
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                Join us for three days of cutting-edge technology, inspiring talks, and hands-on workshops.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component={motion.img}
              src={DEFAULT_PROFILE_IMAGE}
              alt="Symposium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 4,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}
            />
          </Grid>
        </Grid>

        <Box ref={ref} sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Team
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={member.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{
                    p: 3,
                    background: 'rgba(18, 18, 18, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(156, 39, 176, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(156, 39, 176, 0.15)',
                      border: '1px solid rgba(156, 39, 176, 0.2)',
                    },
                  }}>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 2,
                        border: '3px solid',
                        borderColor: 'primary.main',
                      }}
                    />
                    <Typography variant="h6" align="center" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="primary.main" gutterBottom>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" align="center" color="text.secondary">
                      {member.bio}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;