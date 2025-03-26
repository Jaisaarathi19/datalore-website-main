import { useState } from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Chip, Button, Modal } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { AccessTime, LocationOn, Group } from '@mui/icons-material';
import SectionHeading from '../components/common/SectionHeading';
import { Link as RouterLink } from 'react-router-dom';
import { DEFAULT_PROFILE_IMAGE } from '../constants/images';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: 'AI in Healthcare Workshop',
      category: 'Workshop',
      image: DEFAULT_PROFILE_IMAGE,
      date: '15 June 2024',
      time: '10:00 AM - 1:00 PM',
      venue: 'Workshop Hall A',
      capacity: 50,
      description: 'Explore the revolutionary applications of AI in healthcare with hands-on experience in implementing machine learning models for medical diagnosis and patient care optimization.',
      highlights: [
        'Real-world case studies',
        'Hands-on ML model training',
        'Expert panel discussion'
      ],
      speakers: ['Dr. Sarah Johnson', 'Prof. Michael Chen']
    },
    {
      id: 2,
      title: 'Future of Robotics Symposium',
      category: 'Symposium',
      image: DEFAULT_PROFILE_IMAGE,
      date: '16 June 2024',
      time: '2:00 PM - 5:00 PM',
      venue: 'Main Auditorium',
      capacity: 200,
      description: 'Join leading robotics experts as they discuss the latest advancements in robotics technology and its impact on various industries.',
      highlights: [
        'Live robotics demonstrations',
        'Industry applications showcase',
        'Future trends discussion'
      ],
      speakers: ['Dr. James Wilson', 'Dr. Emily Brown']
    },
    {
      id: 3,
      title: 'Cybersecurity in Web3',
      category: 'Workshop',
      image: DEFAULT_PROFILE_IMAGE,
      date: '17 June 2024',
      time: '11:00 AM - 4:00 PM',
      venue: 'Workshop Hall B',
      capacity: 75,
      description: 'Learn about the latest cybersecurity challenges and solutions in the Web3 ecosystem, including blockchain security and smart contract auditing.',
      highlights: [
        'Security audit workshop',
        'Threat modeling exercises',
        'Best practices implementation'
      ],
      speakers: ['Prof. Alex Martinez', 'Ms. Lisa Zhang']
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <SectionHeading
        title="Featured Events"
        subtitle="Discover our exciting lineup of workshops and sessions"
      />

      <Grid container spacing={4}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                onClick={() => setSelectedEvent(event)}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  background: 'rgba(18, 18, 18, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(156, 39, 176, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(156, 39, 176, 0.15)',
                    border: '1px solid rgba(156, 39, 176, 0.2)',
                    '& .event-image': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={event.image}
                    alt={event.title}
                    className="event-image"
                    sx={{
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                  <Chip
                    label={event.category}
                    color="primary"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      backdropFilter: 'blur(4px)',
                    }}
                  />
                </Box>

                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {event.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AccessTime fontSize="small" color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        {event.date} | {event.time}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationOn fontSize="small" color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        {event.venue}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Group fontSize="small" color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        Capacity: {event.capacity} participants
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
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
            maxWidth: 800,
            width: '100%',
            border: '1px solid rgba(156, 39, 176, 0.2)',
            backdropFilter: 'blur(10px)',
            background: 'rgba(18, 18, 18, 0.95)',
          }}>
            {selectedEvent && (
              <>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h4" gutterBottom>
                    {selectedEvent.title}
                  </Typography>
                  <Chip label={selectedEvent.category} color="primary" sx={{ mb: 2 }} />
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {selectedEvent.description}
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      Event Details
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AccessTime color="primary" />
                        <Typography>{selectedEvent.date} | {selectedEvent.time}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOn color="primary" />
                        <Typography>{selectedEvent.venue}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Group color="primary" />
                        <Typography>Capacity: {selectedEvent.capacity} participants</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      Highlights
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {selectedEvent.highlights.map((highlight, index) => (
                        <Typography key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          • {highlight}
                        </Typography>
                      ))}
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Speakers
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {selectedEvent.speakers.map((speaker, index) => (
                      <Chip
                        key={index}
                        label={speaker}
                        variant="outlined"
                        sx={{ borderColor: 'primary.main' }}
                      />
                    ))}
                  </Box>
                </Box>

                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="contained"
                    size="large"
                    component={RouterLink}
                    to="/register"
                    sx={{
                      background: 'linear-gradient(45deg, #9C27B0 30%, #AB47BC 90%)',
                      boxShadow: '0 3px 15px rgba(156, 39, 176, 0.3)',
                    }}
                  >
                    Register for this Event
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </motion.div>
      </Modal>
    </Container>
  );
};

export default Events;