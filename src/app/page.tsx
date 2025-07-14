'use client';
import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Container,
  Paper,
  useTheme,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Group as GroupIcon,
  AttachMoney as FinanceIcon,
  Inventory as InventoryIcon,
  CalendarToday as CalendarIcon,
  BarChart as AnalyticsIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  Devices as DevicesIcon,
  RocketLaunch as RocketIcon
} from '@mui/icons-material';

const Homepage = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ 
      bgcolor: 'background.default', 
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      {/* Hero Section */}
      <Box sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: 'white',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: -150,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }
      }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" component="h1" fontWeight={800} textAlign="center" sx={{ mb: 2 }}>
            Transform Your Business with ERP
          </Typography>
          <Typography variant="h5" component="p" textAlign="center" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
            All-in-One Entrepreneur Resource Planning Platform for Modern Businesses
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <Button 
              variant="contained" 
              size="large" 
              sx={{
                bgcolor: 'white',
                color: theme.palette.primary.main,
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: 3,
                '&:hover': {
                  bgcolor: '#f0f0f0',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Get Started Free
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              sx={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.5)',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 3,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white'
                }
              }}
            >
              View Demo
            </Button>
          </Box>
          
          <Paper elevation={10} sx={{ 
            borderRadius: 4, 
            overflow: 'hidden',
            maxWidth: 900,
            mx: 'auto',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
          }}>
            <Box sx={{ 
              height: 300, 
              background: 'linear-gradient(45deg, #e0f7ff, #f5f0ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Box sx={{ 
                width: 600, 
                height: 300, 
                background: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200) center/cover',
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }} />
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h3" fontWeight={700} textAlign="center" sx={{ mb: 1 }}>
          Everything You Need in One Place
        </Typography>
        <Typography variant="h6" component="p" textAlign="center" color="text.secondary" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
          Powerful features designed to streamline your business operations
        </Typography>
        
        <Grid container spacing={4}>
          {[
            { icon: <DashboardIcon fontSize="large" />, title: 'Dashboard', desc: 'Real-time business insights at a glance' },
            { icon: <GroupIcon fontSize="large" />, title: 'Team Management', desc: 'Organize and collaborate with your team' },
            { icon: <FinanceIcon fontSize="large" />, title: 'Finance Tracking', desc: 'Manage expenses, invoices, and payments' },
            { icon: <InventoryIcon fontSize="large" />, title: 'Inventory Control', desc: 'Track stock levels and manage orders' },
            { icon: <CalendarIcon fontSize="large" />, title: 'Scheduling', desc: 'Plan projects and manage timelines' },
            { icon: <AnalyticsIcon fontSize="large" />, title: 'Analytics', desc: 'Data-driven insights for better decisions' }
          ].map((feature, index) => (
            <Grid size={{xs:12, sm:6, md:4}} key={index}>
              <Box sx={{ 
                height: '100%', 
                p: 3, 
                borderRadius: 3,
                border: '1px solid #e0e0e0',
                transition: '0.3s',
                textAlign: 'center',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  borderColor: theme.palette.primary.main
                }
              }}>
                <Box sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  bgcolor: '#e0e7ff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.palette.primary.main,
                  mb: 3
                }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" component="h3" fontWeight={600} sx={{ mb: 1.5 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ 
        bgcolor: '#f9faff', 
        py: 8,
        borderTop: '1px solid #e0e7ff',
        borderBottom: '1px solid #e0e7ff'
      }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={6}>
            <Grid size={{xs:12, md:6}} >
              <Box sx={{ 
                p: 3, 
                borderRadius: 3,
                bgcolor: 'white',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}>
                <Typography variant="h3" component="h3" fontWeight={700} sx={{ mb: 3 }}>
                  Why Choose Our ERP?
                </Typography>
                
                {[
                  { icon: <RocketIcon />, title: 'Boost Productivity', desc: 'Automate routine tasks and focus on growth' },
                  { icon: <CloudIcon />, title: 'Cloud-Based', desc: 'Access your data anytime, anywhere' },
                  { icon: <SecurityIcon />, title: 'Enterprise Security', desc: 'Bank-level security for your sensitive data' },
                  { icon: <DevicesIcon />, title: 'Multi-Device', desc: 'Works seamlessly on all your devices' }
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', mb: 3 }}>
                    <Box sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      bgcolor: '#e0e7ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: theme.palette.primary.main,
                      mr: 2,
                      flexShrink: 0
                    }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
            
            <Grid size={{xs:12, md:6}}>
              <Box sx={{ 
                position: 'relative',
                height: 400,
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
              }}>
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, #e0f7ff, #f5f0ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Box sx={{ 
                    width: '80%', 
                    height: 300, 
                    background: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000) center/cover',
                    borderRadius: 3,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Box sx={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          bgcolor: '#e0e7ff',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.palette.primary.main,
          mb: 3
        }}>
          <RocketIcon fontSize="large" />
        </Box>
        
        <Typography variant="h3" component="h3" fontWeight={700} sx={{ mb: 2 }}>
          Ready to Transform Your Business?
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
          Join thousands of entrepreneurs who have streamlined their operations with our ERP
        </Typography>
        
        <Button 
          variant="contained" 
          size="large" 
          sx={{
            bgcolor: theme.palette.primary.main,
            color: 'white',
            fontWeight: 700,
            px: 6,
            py: 1.5,
            borderRadius: 3,
            fontSize: '1.1rem',
            boxShadow: '0 10px 25px rgba(67, 97, 238, 0.35)',
            '&:hover': {
              bgcolor: '#3a56d4',
              transform: 'translateY(-2px)',
              boxShadow: '0 15px 30px rgba(67, 97, 238, 0.45)'
            }
          }}
        >
          Get Started Free
        </Button>
        
        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          No credit card required • 14-day free trial • Cancel anytime
        </Typography>
      </Container>

      {/* Footer */}
      <Box sx={{ 
        bgcolor: '#0a192f', 
        color: 'white', 
        py: 4,
        textAlign: 'center'
      }}>
        <Container maxWidth="lg">
          <Typography variant="body1" sx={{ mb: 1 }}>
            © {new Date().getFullYear()} ERP Platform. All rights reserved.
          </Typography>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
            Designed with ❤️ for entrepreneurs worldwide
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Homepage;