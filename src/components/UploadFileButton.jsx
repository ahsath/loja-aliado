import IconButton from '@mui/material/IconButton';
import AddAPhotoRounded from '@mui/icons-material/AddAPhotoRounded';

export default function UploadFileButton({ ariaLabel, ...props }) {
  const id = crypto.randomUUID();
  return (
    <label {...props} htmlFor={id}>
      <input id={id} className="sr-only" accept="image/*" type="file" />
      <IconButton color="primary" aria-label={ariaLabel} component="span">
        <AddAPhotoRounded />
      </IconButton>
    </label>
  );
}
