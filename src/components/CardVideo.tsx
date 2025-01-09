import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from '@mui/material';

interface CardVideoProps {
  video: {
    id?: any;
    title: string;
    category: string;
    imageUrl: string;
    description: string;
  };
  onEdit: (video: any) => void;
  onDelete: (id: number) => void;
}

const CardVideo: React.FC<CardVideoProps> = ({ video, onEdit, onDelete }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      }}
    >
      {/* Encabezado con imagen */}
      <Box
        sx={{
          position: 'relative',
          height: '180px',
          backgroundImage: `url(${video.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography
          sx={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '5px 10px',
            borderRadius: '5px',
          }}
          variant="body2"
        >
          {video.category}
        </Typography>
      </Box>

      {/* Contenido de la tarjeta */}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {video.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {video.description}
        </Typography>
      </CardContent>

      {/* Acciones (botones) */}
      <CardActions
        sx={{
          justifyContent: 'space-between',
          borderTop: '1px solid #e0e0e0',
          padding: '10px 16px',
        }}
      >
        <Button
          size="small"
          sx={{
            color: '#4CAF50',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: 'rgba(76, 175, 80, 0.1)' },
          }}
          onClick={() => onEdit(video)}
        >
          Editar
        </Button>
        <Button
          size="small"
          sx={{
            color: '#F44336',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: 'rgba(244, 67, 54, 0.1)' },
          }}
          onClick={() => onDelete(video.id!)}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardVideo;
