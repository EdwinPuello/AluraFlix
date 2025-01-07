import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Modal,
} from '@mui/material';
import { VideoData } from '../App';

interface NuevoVideoProps {
  videoToEdit: VideoData | null;
  onSave: (video: VideoData) => void;
  open: boolean;
  onClose: () => void;
}

const NuevoVideo: React.FC<NuevoVideoProps> = ({ videoToEdit, onSave, open, onClose }) => {
  const [videoData, setVideoData] = useState<VideoData>({
    id: undefined,
    title: '',
    category: '',
    imageUrl: '',
    videoUrl: '',
    description: '',
  });

  useEffect(() => {
    if (videoToEdit) {
      setVideoData(videoToEdit);
    } else {
      setVideoData({
        id: undefined,
        title: '',
        category: '',
        imageUrl: '',
        videoUrl: '',
        description: '',
      });
    }
  }, [videoToEdit]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVideoData((prev:any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(videoData);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          {videoToEdit ? 'Editar Video' : 'Nuevo Video'}
        </Typography>
        <Box component="form" autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Título"
            name="title"
            value={videoData.title}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <FormControl fullWidth>
            <InputLabel>Categoría</InputLabel>
            <Select
              name="category"
              value={videoData.category}
              onChange={(e) =>
                setVideoData((prev:any) => ({ ...prev, category: e.target.value }))
              }
              label="Categoría"
            >
              {['Frontend', 'Backend', 'Innovación', 'Gestión'].map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Enlace de la Imagen"
            name="imageUrl"
            value={videoData.imageUrl}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Enlace del Video"
            name="videoUrl"
            value={videoData.videoUrl}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Descripción"
            name="description"
            value={videoData.description}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Guardar
            </Button>
            <Button variant="outlined" color="secondary" onClick={onClose}>
              Cancelar
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default NuevoVideo;
