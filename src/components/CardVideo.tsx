import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { VideoData } from '../App';

interface CardVideoProps {
  video: VideoData;
  onEdit: (video: VideoData | null) => void;
  onDelete: (id: number) => void;
}

const CardVideo: React.FC<CardVideoProps> = ({ video, onEdit, onDelete }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <Typography variant="h5">{video.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {video.description}
        </Typography>
        <Typography variant="caption" color="primary">
          {video.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" onClick={() => onEdit(video)}>
          Editar
        </Button>
        <Button size="small" color="error" onClick={() => onDelete(video.id!)}>
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardVideo;
