import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material';

const NuevoVideo: React.FC = () => {
  const [videoData, setVideoData] = useState({
    title: '',
    category: '',
    imageUrl: '',
    videoUrl: '',
    description: '',
  });

  const categories = ['Frontend', 'Backend', 'Innovación', 'Gestión']; // Ejemplo de categorías

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVideoData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setVideoData((prev) => ({ ...prev, [name as string]: value }));
  };

  const handleSubmit = () => {
    console.log('Datos del video:', videoData);
    // Aquí puedes agregar la lógica para guardar el video
  };

  const handleClear = () => {
    setVideoData({
      title: '',
      category: '',
      imageUrl: '',
      videoUrl: '',
      description: '',
    });
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Registrar Nuevo Video
      </Typography>
      <Box component="form" autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Título"
          variant="outlined"
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
            onChange={handleSelectChange} // Cambiado a la función específica para Select
            label="Categoría"
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Enlace de la Imagen"
          variant="outlined"
          name="imageUrl"
          value={videoData.imageUrl}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Enlace del Video"
          variant="outlined"
          name="videoUrl"
          value={videoData.videoUrl}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Descripción"
          variant="outlined"
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
          <Button variant="outlined" color="secondary" onClick={handleClear}>
            Limpiar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NuevoVideo;
