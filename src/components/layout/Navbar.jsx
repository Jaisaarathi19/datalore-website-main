import { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Slide, useScrollTrigger, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const trigger = useScrollTrigger();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pages = [
    { title: 'Home', path: '/' },
    { 
      title: 'Events', 
      path: '/events',
      subEvents: [
        {
          title: 'Innovision',
          subtitle: 'Clash of AI Minds',
          path: '/events/innovision',
          tagline: 'AI Battle Arena – Where Models Compete & Innovations Shine!'
        },
        {
          title: 'Brainstorm Blitz',
          subtitle: 'Paper in a Flash',
          path: '/events/brainstorm-blitz',
          tagline: 'Present Big Ideas in Just 3 Minutes!'
        }
      ]
    },
    { title: 'Speakers', path: '/speakers' },
    { title: 'Schedule', path: '/schedule' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Toolbar spacer */}
      <Box
        sx={{
          height: { 
            xs: '60px',   // Small screens
            sm: '70px',   // Medium screens
            md: scrolled ? '100px' : '120px' // Large screens
          },
          transition: 'all 0.3s ease-in-out'
        }}
      />
      
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar 
          position="fixed" 
          sx={{ 
            background: scrolled 
              ? 'rgba(10, 10, 10, 0.95)' 
              : 'rgba(18, 18, 18, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(156, 39, 176, 0.1)',
            transition: 'all 0.3s ease-in-out',
            boxShadow: scrolled 
              ? '0 4px 20px rgba(156, 39, 176, 0.15)' 
              : 'none',
          }}
        >
          <Box sx={{ 
            maxWidth: '100%',
            margin: '0 auto',
            width: '100%',
            px: { 
              xs: 1,  // Reduced padding on small screens
              sm: 2,  // Reduced padding on medium screens
              md: 3   // Reduced padding on large screens
            }
          }}>
            <Toolbar 
              disableGutters 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: { xs: 1, sm: 2, md: 3 },
                minHeight: { 
                  xs: '64px',   // Small screens
                  sm: '72px',   // Medium screens
                  md: scrolled ? '80px' : '96px' // Large screens - reduced for better proportion
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              {/* Logo - Visible on all screens */}
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  fontFamily: 'orbiton, sans-serif',
                  fontSize: { 
                    xs: '1.1rem',  // Reduced size on small screens
                    sm: '1.3rem',  // Reduced size on medium screens
                    md: scrolled ? '1.5rem' : '1.7rem', // Reduced size on large screens
                    lg: scrolled ? '1.7rem' : '1.9rem'
                  },
                  fontWeight: 800,
                  background: 'linear-gradient(45deg, #fff 30%, #9C27B0 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textDecoration: 'none',
                  letterSpacing: { xs: '0.5px', sm: '1px' }, // Reduced letter spacing
                  transition: 'all 0.3s ease-in-out',
                  flexShrink: 0,
                  marginRight: 'auto',
                  '&:hover': {
                    transform: 'scale(1.03)', // Reduced scale effect
                    background: 'linear-gradient(45deg, #9C27B0 30%, #fff 90%)',
                    WebkitBackgroundClip: 'text',
                  }
                }}
              >
                DATALORE '25
              </Typography>

              {/* Desktop Navigation - Hidden on mobile */}
              <Box sx={{ 
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: { md: 3, lg: 4 }
              }}>
                {pages.map((page, index) => (
                  <motion.div
                    key={page.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component={RouterLink}
                      to={page.path}
                      sx={{
                        color: location.pathname === page.path ? '#BA68C8' : 'white',
                        fontSize: { md: '0.95rem', lg: '1rem' },
                        padding: '8px 16px',
                        fontWeight: 500,
                        letterSpacing: '0.5px',
                        position: 'relative',
                        minWidth: 'auto',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          width: location.pathname === page.path ? '80%' : '0',
                          height: '2px',
                          background: 'linear-gradient(90deg, #9C27B0, #BA68C8)',
                          transition: 'all 0.3s ease',
                          transform: 'translateX(-50%)',
                        },
                        '&:hover': {
                          color: '#BA68C8',
                          background: 'rgba(156, 39, 176, 0.08)',
                          '&::after': {
                            width: '80%',
                          }
                        }
                      }}
                    >
                      {page.title}
                    </Button>
                  </motion.div>
                ))}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={RouterLink}
                    to="/register"
                    variant="contained"
                    sx={{
                      fontSize: '0.95rem',
                      padding: '10px 20px',
                      background: 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)',
                      color: '#fff',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 15px rgba(156, 39, 176, 0.3)',
                      transition: 'all 0.3s ease',
                      marginLeft: 2,
                      whiteSpace: 'nowrap',
                      position: 'relative',
                      zIndex: 1,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, #BA68C8 0%, #9C27B0 100%)',
                        borderRadius: '8px',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: -1,
                      },
                      '&:hover': {
                        boxShadow: '0 8px 25px rgba(156, 39, 176, 0.5)',
                        transform: 'translateY(-2px)',
                        '&::before': {
                          opacity: 1,
                        }
                      }
                    }}
                  >
                    Register Now
                  </Button>
                </motion.div>
              </Box>

              {/* Mobile Menu Button - Hidden on desktop */}
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  onClick={() => setIsOpen(true)}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(156, 39, 176, 0.1)'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Box>
        </AppBar>
      </Slide>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} navItems={pages} />
    </>
  );
};

export default Navbar;