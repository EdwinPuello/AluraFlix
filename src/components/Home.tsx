import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';

import CardVideo from './CardVideo';
import { VideoData } from '../App';

interface HomeProps {
  videos: VideoData[];
  onEdit: (video: VideoData | null) => void;
  onDelete: (id: number) => void;
}

const Home: React.FC<HomeProps> = ({ videos, onEdit, onDelete }) => {
  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Videos
      </Typography>
      <Grid2 container spacing={2}>
        {videos.map((video) => (
          <Grid2 size={{xs:12,sm:6,md:4}} key={video.id}>
            <CardVideo video={video} onEdit={onEdit} onDelete={onDelete} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
export default Home;
