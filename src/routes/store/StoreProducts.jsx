import {
  Box,
  ButtonBase,
  Typography,
  Fab,
  Zoom,
  useScrollTrigger,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Main } from '../../components';
import products from '../../data/products.json';
import AddRounded from '@mui/icons-material/AddRounded';

export default function StoreProducts() {
  const trigger = useScrollTrigger();

  return (
    <Main>
      <Box className="grid gap-px grid-cols-2 overflow-hidden" borderRadius={4}>
        {products.map((product) => {
          return (
            <ButtonBase
              key={product._id}
              sx={{ display: 'block', bgcolor: 'background.paper' }}
              to={product._id}
              component={Link}
            >
              <img
                className="max-w-full object-contain block mx-auto px-3"
                src={product.src}
                alt={product.name}
                height="144"
                loading="lazy"
              />
              <div className="px-4 pb-3 pt-2">
                <Typography
                  variant="caption"
                  color={product.stock <= 0 ? 'primary.main' : 'text.secondary'}
                >
                  {product.stock} em estoque
                </Typography>
                <Typography
                  variant="button"
                  component="div"
                  sx={{ fontSize: 16, lineHeight: 'initial' }}
                >
                  {product.price}
                </Typography>
              </div>
              <div className="px-4 pb-4">
                <Typography variant="body2" color="text.secondary">
                  {product.name}
                </Typography>
              </div>
            </ButtonBase>
          );
        })}
      </Box>
      <Zoom in={!trigger}>
        <Fab
          sx={{
            position: 'fixed',
            zIndex: 'zIndex.fab',
            bottom: 72,
            right: 16,
            '&': { borderRadius: 4 },
          }}
          color="primary"
          aria-label="Adicionar um novo produto"
        >
          <AddRounded />
        </Fab>
      </Zoom>
    </Main>
  );
}
