import SaveRounded from '@mui/icons-material/SaveRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { UploadFileButton } from '../../components';

export default function StoreAddProduct() {
  return (
    <>
      <AppBar
        color="inherit"
        elevation={0}
        sx={{ borderBottom: 1, borderColor: 'grey.50' }}
      >
        <Toolbar className="gap-6">
          <IconButton size="large" edge="start" aria-label="Cancelar">
            <CloseRounded />
          </IconButton>
          <Typography variant="h6" component="div">
            Novo produto
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <form>
        <div className="flex items-center justify-center relative p-4">
          <img
            className="object-contain block"
            width="144"
            height="144"
            src="https://montraalentejana.pt/wp-content/uploads/2020/05/Produtos-MontraAlentejana-Mai19_0365_HRsemfundo-2-e1563900073282.png"
            alt=""
          />
          <UploadFileButton className="absolute right-4 bottom-4" />
        </div>
        <Box bgcolor="background.paper" p={2} mb={1} borderRadius={4}>
          content
        </Box>
        <Box
          position="fixed"
          left={0}
          right={0}
          bottom={0}
          borderTop={1}
          borderColor="grey.50"
          bgcolor="background.paper"
          component={Toolbar}
        >
          <Button
            startIcon={<SaveRounded />}
            variant="contained"
            type="submit"
            disableElevation
            fullWidth
          >
            Salvar
          </Button>
        </Box>
      </form>
      <Toolbar />
    </>
  );
}
