import { Box, Container, Typography, Link, IconButton, Stack, Button } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, GitHub } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Facebook />, 
      url: 'https://facebook.com/datalore25official',
      label: 'Follow us on Facebook'
    },
    { 
      icon: <Twitter />, 
      url: 'https://twitter.com/datalore25_ai',
      label: 'Follow us on Twitter'
    },
    { 
      icon: <LinkedIn />, 
      url: 'https://linkedin.com/company/datalore25-tech-conference',
      label: 'Connect with us on LinkedIn'
    },
    { 
      icon: <Instagram />, 
      url: 'https://instagram.com/datalore25.tech',
      label: 'Follow us on Instagram'
    },
    { 
      icon: <GitHub />, 
      url: 'https://github.com/datalore25-conference',
      label: 'View our projects on GitHub'
    }
  ];

  const footerLinks = {
    About: [
      { title: 'About Us', path: '/about' },
      { title: 'Our Team', path: '/team' },
      { title: 'Careers', path: '/careers' },
      { title: 'Contact Us', path: '/contact' },
      { title: 'Partner With Us', path: '/partnership' }
    ],
    Support: [
      { title: 'FAQs', path: '/contact' }, // Updated path to point to combined page
      { title: 'Help Center', path: '/help' },
      { title: 'Registration', path: '/register' },
      { title: 'Sponsorship', path: '/sponsors' },
      { title: 'Technical Support', path: '/support' }
    ]
  };

  // Update grid template columns for better spacing after removing Resources
  return (
    <Box
      component="footer"
      sx={{
        background: 'rgba(18, 18, 18, 0.8)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(156, 39, 176, 0.1)',
        boxShadow: '0 -4px 20px rgba(156, 39, 176, 0.15)',
        borderTop: '2px solid rgba(156, 39, 176, 0.15)',
        boxShadow: '0 -10px 40px rgba(156, 39, 176, 0.1), 0 -4px 20px rgba(0, 0, 0, 0.2)',
        py: { xs: 8, md: 10 },
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden', // Add this to contain the pseudo-elements
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(186, 104, 200, 0.4), transparent)'
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0, // Changed from top: '100%'
          left: 0,
          right: 0,
          height: '100%', // Changed from fixed height
          background: 'radial-gradient(ellipse at top, rgba(156, 39, 176, 0.15), transparent)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -40,
            left: '5%',
            width: '90%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(186, 104, 200, 0.2), transparent)'
          }
        }}
      >
        {/* Main Footer Content */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr' },
          gap: { xs: 4, md: 6 },
          mb: 8
        }}>
          {/* Company Info Section */}
          <Box>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 800,
                background: 'linear-gradient(45deg, #fff 30%, #BA68C8 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: 'none',
                letterSpacing: '2px',
                mb: 3,
                display: 'inline-block',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #9C27B0, transparent)'
                }
              }}
            >
              DATALORE '25
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '500px',
                mb: 3,
                lineHeight: 1.7
              }}
            >
              Join us at the forefront of technological innovation. Datalore '25 brings together industry leaders, researchers, and innovators to explore cutting-edge developments in AI, Machine Learning, and Data Science.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: 'white',
                    border: '1px solid rgba(156, 39, 176, 0.3)',
                    transition: 'all 0.3s ease',
                    padding: '12px',
                    '&:hover': {
                      background: 'rgba(156, 39, 176, 0.1)',
                      transform: 'translateY(-2px)',
                      borderColor: '#9C27B0'
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Footer Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Box key={category} sx={{ position: 'relative' }}>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  mb: 4,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: '40px',
                    height: '2px',
                    background: '#9C27B0'
                  }
                }}
              >
                {category}
              </Typography>
              <Stack spacing={2}>
                {links.map((link) => (
                  <Link
                    key={link.title}
                    component={RouterLink}
                    to={link.path}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#BA68C8',
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    {link.title}
                  </Link>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        {/* Newsletter Section */}
        <Box sx={{
          maxWidth: '500px',
          py: 6,
          px: { xs: 3, md: 0 },
          mb: 8
        }}>
          <Typography variant="h6" sx={{
            color: 'white',
            mb: 2,
            fontSize: '1.4rem',
            fontWeight: 600,
            background: 'linear-gradient(45deg, #fff 30%,rgb(3, 2, 3) 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Stay Connected
          </Typography>
          <Typography sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            mb: 3,
            lineHeight: 1.6
          }}>
            Subscribe to stay updated with our latest events and announcements.
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              width: { xs: '100%', md: '450px' }
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid rgba(156, 39, 176, 0.3)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                width: '100%',
                fontSize: '0.9rem'
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                padding: '10px 24px',
                background: 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)',
                color: '#fff',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(156, 39, 176, 0.3)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(156, 39, 176, 0.5)',
                  background: 'linear-gradient(135deg, #BA68C8 0%, #9C27B0 100%)'
                }
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        {/* Copyright Section */}
        <Box sx={{
          borderTop: '1px solid rgba(156, 39, 176, 0.1)',
          pt: 4,
          pb: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
          >
            © {new Date().getFullYear()} Datalore '25. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;