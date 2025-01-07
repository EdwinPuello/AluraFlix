import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

interface CardVideoProps {
    title: string;
    description: string;
    category: string;
}

const CardVideo: React.FC<CardVideoProps> = ({ title, description, category }) => (
  <Card sx={{ maxWidth: 345, margin: 2 }}>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body2" color="text.secondary">{description}</Typography>
      <Typography variant="caption" color="primary">{category}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="secondary">Editar</Button>
      <Button size="small" color="error">Eliminar</Button>
    </CardActions>
  </Card>
);

export default CardVideo;
