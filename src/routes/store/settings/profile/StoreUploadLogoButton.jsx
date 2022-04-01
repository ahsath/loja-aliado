import IconButton from '@mui/material/IconButton';
import AddAPhotoRounded from '@mui/icons-material/AddAPhotoRounded';

export default function UploadLogoButton() {
  return (
    <label htmlFor="store-profile-logo">
      <input
        id="store-profile-logo"
        className="sr-only"
        accept="image/*"
        type="file"
      />
      <IconButton
        color="primary"
        aria-label="Toque para selecionar um logotipo para sua loja"
        component="span"
      >
        <AddAPhotoRounded />
      </IconButton>
    </label>
  );
}
