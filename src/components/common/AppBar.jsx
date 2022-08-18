import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MapIcon from '@mui/icons-material/Map';
import EqualizerIcon from '@mui/icons-material/Equalizer';

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ResponsiveAppBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false); // Workaround for huge icons

  const navigateTo = useNavigate();

  React.useEffect(() => {
    setIsReady(true);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', marginBottom: '5em' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            N5 App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItemButton
              onClick={() => navigateTo('/')}
            >
              {isReady
                && (
                  <ListItemIcon>
                    <EqualizerIcon />
                  </ListItemIcon>
                )}
              <ListItemText primary="General" />
            </ListItemButton>
            <Divider />
            <ListItemButton
              onClick={() => navigateTo('/addStock')}
            >
              {isReady
                && (
                  <ListItemIcon>
                    <ListAltIcon />
                  </ListItemIcon>
                )}
              <ListItemText primary="Agregar Stock" />
            </ListItemButton>
            <Divider />
            <ListItemButton
              onClick={() => navigateTo('/addProducts')}
            >
              {isReady
                && (
                  <ListItemIcon>
                    <MapIcon />
                  </ListItemIcon>
                )}
              <ListItemText primary="Agregar Productos" />
            </ListItemButton>
            <Divider />
            <ListItemButton
              onClick={() => navigateTo('/test')}
            >
              {isReady
                && (
                  <ListItemIcon>
                    <MapIcon />
                  </ListItemIcon>
                )}
              <ListItemText primary="Test" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ResponsiveAppBar;
