import SaveRounded from '@mui/icons-material/SaveRounded';
import DeleteRounded from '@mui/icons-material/DeleteRounded';
import { Button } from '@mui/material';
import { Page } from '../../components';
import StoreProductForm from './components/StoreProductForm';

export default function StoreEditProduct() {
  const saveProduct = () => {};

  return (
    <Page
      title="Molho de Alho"
      bottomContent={
        <div className="flex gap-4 w-full">
          <Button
            startIcon={<DeleteRounded />}
            variant="outlined"
            type="submit"
            form="product-form"
            disableElevation
            fullWidth
          >
            Excluir
          </Button>
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
        </div>
      }
    >
      <StoreProductForm onSubmit={saveProduct} />
    </Page>
  );
}
