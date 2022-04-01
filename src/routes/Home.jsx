import { Button, Box } from '@mui/material';

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-full p-4">
      <div />
      <Box
        className="flex gap-4 items-baseline self-center"
        sx={{ color: 'primary.main' }}
      >
        <div className="font-['Pacifico',_cursive] text-7xl">Loja</div>
        <div className="font-black">Aliado</div>
      </Box>
      <div className="flex gap-4">
        <Button className="w-full" variant="outlined" size="large">
          Entrar
        </Button>
        <Button
          className="w-full"
          variant="contained"
          size="large"
          disableElevation
        >
          Inscrever-se
        </Button>
      </div>
    </div>
  );
}
