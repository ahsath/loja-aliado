import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';
import { UploadFileButton } from '../../../components';

export default function StoreProductForm(props) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    stock: 0,
    src: '',
    ...props.product,
  });

  return (
    <form
      id="product-form"
      onSubmit={props.onSubmit}
      noValidate
      autoComplete="off"
    >
      <div className="flex items-center justify-center relative p-4">
        <img
          className="object-contain block"
          width="144"
          height="144"
          src="https://montraalentejana.pt/wp-content/uploads/2020/05/Produtos-MontraAlentejana-Mai19_0365_HRsemfundo-2-e1563900073282.png"
          alt=""
        />
        <UploadFileButton className="absolute right-4 bottom-4 -mr-2" />
      </div>
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 2,
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <TextField label="Nome do Produto" helperText=" " />
        <div className="flex gap-7">
          <TextField helperText=" " label="Moeda" value="EUR" disabled select>
            <MenuItem value="EUR">EUR</MenuItem>
          </TextField>
          <TextField label="Preço" className="grow" helperText=" " />
        </div>
        <TextField label="Estoque" className="grow" helperText=" " />
      </Box>
    </form>
  );
}
