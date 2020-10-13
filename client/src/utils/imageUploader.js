import axios from 'axios';

const imageUploader = async image => {
  const signingRes = await axios.get('/api/images/upload');

  const formData = new FormData();
  formData.append('file', image);
  formData.append('api_key', 548836881517934);
  formData.append('timestamp', signingRes.data.timestamp);
  formData.append('signature', signingRes.data.signature);

  const cloudinaryRes = await axios.post('https://api.cloudinary.com/v1_1/dmnycxzii/image/upload', formData);
  return cloudinaryRes.data.secure_url;
};

export default imageUploader;