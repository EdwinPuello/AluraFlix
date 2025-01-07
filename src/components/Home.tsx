import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import CardVideo from '../components/CardVideo';

const Home: React.FC = () => {
  const categories = [
    {
      name: 'Frontend',
      videos: [
        { title: 'React Basics', description: 'Learn the basics of React', category: 'Frontend' },
        { title: 'CSS Tricks', description: 'Advanced CSS techniques', category: 'Frontend' },
      ],
    },
    {
      name: 'Backend',
      videos: [
        { title: 'Node.js API', description: 'Building APIs with Node.js', category: 'Backend' },
      ],
    },
    {
      name: 'Innovación',
      videos: [],
    },
    {
      name: 'Gestión',
      videos: [],
    },
  ];

  return (
    <Box>
      {/* Banner */}
      <Box
        sx={{
          height: '300px',
          backgroundColor: 'primary.main',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" align="center">
          ¡Bienvenido a LuraFlix!
        </Typography>
      </Box>

      {/* Categorías */}
      {categories.map((category, index) => (
        <Box key={index} sx={{ margin: 4 }}>
          <Typography variant="h4" color="primary" sx={{ marginBottom: 2 }}>
            {category.name}
          </Typography>
          <Grid2 container spacing={2}>
            {category.videos.length > 0 ? (
              category.videos.map((video, idx) => (
                <Grid2 sx={{gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' } }} key={idx}>
                  <CardVideo
                    title={video.title}
                    description={video.description}
                    category={video.category}
                  />
                </Grid2>
              ))
            ) : (
              <Typography variant="body1" color="textSecondary">
                No hay videos en esta categoría.
              </Typography>
            )}
          </Grid2>
        </Box>
      ))}
    </Box>
  );
};

export default Home;
