import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionHeading from '../components/common/SectionHeading';

const ContactAndFAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const contactInfo = [
    {
      icon: <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Location',
      details: 'College of Engineering Campus, Chennai - 600025',
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Phone',
      details: '+91 44 2235 7080',
    },
    {
      icon: <Email sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Email',
      details: 'symposium2024@college.edu',
    },
  ];

  const faqs = [
    {
      question: "What is Symposium 2025?",
      answer: "Symposium 2025 is a premier technical event that brings together industry experts, researchers, and students to explore cutting-edge developments in technology and artificial intelligence."
    },
    {
      question: "When and where will the event take place?",
      answer: "The event will be held at the College of Engineering Campus, Chennai from April 16-18, 2025. The venue is easily accessible by public transport and private vehicles."
    },
    {
      question: "How can I register for the event?",
      answer: "You can register through our 'Register' page. Early bird registrations get special discounts. Make sure to complete your registration before the deadline to secure your spot."
    },
    {
      question: "Is accommodation provided for outstation participants?",
      answer: "Yes, accommodation can be arranged for outstation participants upon request. Please mention your accommodation requirements during registration or contact us directly."
    },
    {
      question: "What are the main events in Symposium 2025?",
      answer: "The main events include Innovision (AI Battle Arena), Brainstorm Blitz (Paper Presentations), keynote speeches by industry leaders, workshops, and networking sessions."
    },
    {
      question: "Are there any prerequisites for participating?",
      answer: "While there are no strict prerequisites, basic knowledge of technology and enthusiasm for learning are recommended. Specific events may have their own eligibility criteria."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Contact Section */}
      <SectionHeading
        title="Get in Touch"
        subtitle="Contact us or check our FAQ section below"
      />

      <Grid container spacing={6} sx={{ mb: 10 }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Paper sx={{
              p: 4,
              background: 'rgba(18, 18, 18, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(156, 39, 176, 0.1)',
              borderRadius: 2,
            }}>
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(156, 39, 176, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(156, 39, 176, 0.3)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(156, 39, 176, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(156, 39, 176, 0.3)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(156, 39, 176, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(156, 39, 176, 0.3)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{
                        background: 'linear-gradient(45deg, #9C27B0 30%, #AB47BC 90%)',
                        boxShadow: '0 3px 15px rgba(156, 39, 176, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(156, 39, 176, 0.4)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  background: 'rgba(18, 18, 18, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(156, 39, 176, 0.1)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 30px rgba(156, 39, 176, 0.15)',
                    border: '1px solid rgba(156, 39, 176, 0.2)',
                  },
                }}>
                  {info.icon}
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {info.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {info.details}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* FAQ Section */}
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions"
      />
      
      <Box sx={{ width: '100%' }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{ 
              mb: { xs: 2, sm: 2.5, md: 3 },
              background: 'rgba(18, 18, 18, 0.9)',
              borderRadius: '12px',
              border: '1px solid rgba(156, 39, 176, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: isMobile ? 'none' : 'translateY(-2px)',
                boxShadow: '0 6px 25px rgba(156, 39, 176, 0.15)',
                border: '1px solid rgba(156, 39, 176, 0.2)',
              },
              '&.Mui-expanded': {
                margin: { xs: '8px 0', sm: '12px 0', md: '16px 0' },
                background: 'rgba(25, 25, 25, 0.95)',
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ 
                color: '#BA68C8',
                transition: 'transform 0.3s ease',
                transform: expanded === `panel${index}` ? 'rotate(180deg)' : 'rotate(0deg)',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }} />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              sx={{
                minHeight: { xs: 48, sm: 56, md: 64 },
                padding: { xs: '0 16px', sm: '0 20px', md: '0 24px' },
                '&:hover': {
                  background: 'rgba(156, 39, 176, 0.08)',
                },
                '& .MuiAccordionSummary-content': {
                  margin: { xs: '8px 0', sm: '10px 0', md: '12px 0' },
                }
              }}
            >
              <Typography 
                variant="h6"
                sx={{
                  color: '#BA68C8',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#CE93D8'
                  }
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: { xs: '12px 16px 16px', sm: '14px 20px 20px', md: '16px 24px 24px' },
                borderTop: '1px solid rgba(156, 39, 176, 0.1)',
                background: 'rgba(0, 0, 0, 0.2)'
              }}
            >
              <Typography
                sx={{
                  color: '#e0e0e0',
                  lineHeight: 1.7,
                  letterSpacing: '0.3px',
                  pl: { xs: 0, sm: 0.5, md: 1 },
                  fontSize: { xs: '0.875rem', sm: '0.925rem', md: '1rem' }
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default ContactAndFAQ;