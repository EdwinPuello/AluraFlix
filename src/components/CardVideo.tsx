import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Tooltip,
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
        boxShadow: '0px 0px 26px rgb(10 34 121)',
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
        <Tooltip title={
           <Typography variant="body2" sx={{ fontSize: '13px', color: 'white' }}>
           {video.title}
         </Typography>
        } arrow>
        <Typography variant="h6" gutterBottom>
          {video.title.slice(0, 30)}
          {video.title.length > 30 ? '...' : ''}
        </Typography>
      </Tooltip>
        <Tooltip title={
          <Typography variant="body2" sx={{ fontSize: '13px', color: 'white' }}>
            {video.description}
          </Typography>
        } arrow>
          <Typography variant="body2" color="text.secondary">
            {video.description.slice(0, 80)}
            {video.description.length > 80 ? '...' : ''}
          </Typography>
        </Tooltip>
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
            color: 'rgb(4, 12, 42)',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: 'rgb(4 12 42 / 30%)' },
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
            '&:hover': { backgroundColor: 'rgb(244 67 54 / 30%)' },
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
