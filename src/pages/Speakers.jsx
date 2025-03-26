import { useState } from 'react';
import { Box, Container, Grid, Typography, Card, Avatar, IconButton, Modal, Chip } from '@mui/material';
import { LinkedIn, Twitter, Language } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const speakers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'AI Research Director',
      company: 'Tech Innovations Lab',
      image: '/speakers/sarah.jpg',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Ethics'],
      bio: 'Leading researcher in AI with over 15 years of experience...',
      social: {
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        twitter: 'https://twitter.com/drsarah',
        website: 'https://sarahjohnson.ai'
      },
      sessions: ['Keynote: Future of AI', 'Workshop: Deep Learning']
    },
    // Add more speakers
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
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <SectionHeading
        title="Distinguished Speakers"
        subtitle="Learn from industry leaders and experts"
      />

      <Grid container spacing={4}>
        {speakers.map((speaker, index) => (
          <Grid item xs={12} sm={6} md={4} key={speaker.id}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Card
                onClick={() => setSelectedSpeaker(speaker)}
                sx={{
                  p: 3,
                  cursor: 'pointer',
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
                    src={speaker.image}
                    alt={speaker.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      border: '3px solid',
                      borderColor: 'primary.main',
                    }}
                  />
                </Box>

                <Typography variant="h6" align="center" gutterBottom>
                  {speaker.name}
                </Typography>
                <Typography variant="subtitle1" align="center" color="primary.main" gutterBottom>
                  {speaker.role}
                </Typography>
                <Typography variant="body2" align="center" color="text.secondary" gutterBottom>
                  {speaker.company}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
                  {speaker.expertise.map((skill, idx) => (
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

      <Modal
        open={!!selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <Box sx={{
            bgcolor: 'background.default',
            p: 4,
            borderRadius: 2,
            maxWidth: 600,
            width: '100%',
            border: '1px solid rgba(156, 39, 176, 0.2)',
            backdropFilter: 'blur(10px)',
            background: 'rgba(18, 18, 18, 0.95)',
          }}>
            {selectedSpeaker && (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
                  <Avatar
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    sx={{ width: 120, height: 120, border: '3px solid', borderColor: 'primary.main' }}
                  />
                  <Box>
                    <Typography variant="h4" gutterBottom>
                      {selectedSpeaker.name}
                    </Typography>
                    <Typography variant="h6" color="primary.main" gutterBottom>
                      {selectedSpeaker.role}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {selectedSpeaker.company}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body1" paragraph>
                  {selectedSpeaker.bio}
                </Typography>

                <Box sx={{ my: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Areas of Expertise
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {selectedSpeaker.expertise.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        variant="outlined"
                        sx={{ borderColor: 'primary.main' }}
                      />
                    ))}
                  </Box>
                </Box>

                <Box sx={{ my: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Sessions
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {selectedSpeaker.sessions.map((session, index) => (
                      <Typography key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        • {session}
                      </Typography>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
                  {selectedSpeaker.social.linkedin && (
                    <IconButton
                      component="a"
                      href={selectedSpeaker.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'primary.main' }}
                    >
                      <LinkedIn />
                    </IconButton>
                  )}
                  {selectedSpeaker.social.twitter && (
                    <IconButton
                      component="a"
                      href={selectedSpeaker.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'primary.main' }}
                    >
                      <Twitter />
                    </IconButton>
                  )}
                  {selectedSpeaker.social.website && (
                    <IconButton
                      component="a"
                      href={selectedSpeaker.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'primary.main' }}
                    >
                      <Language />
                    </IconButton>
                  )}
                </Box>
              </>
            )}
          </Box>
        </motion.div>
      </Modal>
    </Container>
  );
};

export default Speakers;