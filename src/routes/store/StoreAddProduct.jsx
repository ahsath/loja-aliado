import SaveRounded from '@mui/icons-material/SaveRounded';
import { Button } from '@mui/material';
import { Page } from '../../components';
import StoreProductForm from './components/StoreProductForm';

export default function StoreAddProduct() {
  const saveProduct = () => {};

  return (
    <Page
      title="Novo produto"
      bottomContent={
        <Button
          startIcon={<SaveRounded />}
          variant="contained"
          type="submit"
          form="product-form"
          disableElevation
          fullWidth
        >
          Salvar
        </Button>
      }
    >
      <StoreProductForm onSubmit={saveProduct} />
    </Page>
  );
}
