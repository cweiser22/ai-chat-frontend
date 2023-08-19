import { Box } from '@mui/joy';
import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function MainLayout({children}: React.PropsWithChildren){
    return (
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <Sidebar />
        <Box component="main" className="MainContent" flex={1}>
          {children}
        </Box>
      </Box>
    )
}

export default MainLayout;