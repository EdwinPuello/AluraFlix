import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';

import CardVideo from './CardVideo';
import { VideoData } from '../App';
import Banner from './Banner';

interface HomeProps {
  videos: VideoData[];
  onEdit: (video: VideoData | null) => void;
  onDelete: (id: number) => void;
}

const groupVideosByCategory = (videos: VideoData[]) => {
  return videos.reduce((groups, video) => {
    if (!groups[video.category]) {
      groups[video.category] = [];
    }
    groups[video.category].push(video);
    return groups;
  }, {} as Record<string, VideoData[]>);
};

const Home: React.FC<HomeProps> = ({ videos, onEdit, onDelete }) => {
  const groupedVideos = groupVideosByCategory(videos);

  return (
    <Box>
      <Banner />
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Videos
      </Typography>
      {Object.entries(groupedVideos).map(([category, categoryVideos]) => (
        <Box key={category} mb={4}>
          <Typography variant="h5" gutterBottom>
            {category}
          </Typography>
          <Grid2 container spacing={2}>
            {categoryVideos.map((video) => (
              <Grid2 size={{xs:12,sm:6,md:4}} key={video.id}>
                <CardVideo video={video} onEdit={onEdit} onDelete={onDelete} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      ))}
    </Box>
  );
};

export default Home;


{/*  */}