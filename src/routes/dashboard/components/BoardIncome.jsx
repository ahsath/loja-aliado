import { Typography } from '@mui/material';

export default function BoardIncome() {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <div className="flex justify-between">
        <Typography variant="caption" component="div" color="text.secondary">
          Hoje
        </Typography>
        <Typography
          className="-mb"
          variant="caption"
          component="div"
          align="right"
          color="text.secondary"
        >
          Ontem
        </Typography>
      </div>
      <div className="flex justify-between items-baseline">
        <Typography variant="h4" component="span">
          845,31
          <Typography variant="button" component="span">
            EUR
          </Typography>
        </Typography>
        <Typography variant="button">323,44 EUR</Typography>
      </div>
    </div>
  );
}
