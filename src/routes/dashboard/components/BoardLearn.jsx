import SchoolRounded from '@mui/icons-material/SchoolRounded';
import { Typography, ListItemButton, Box } from '@mui/material';
import { Scroll, ScrollItem } from '../../../components';

export default function BoardLeanr() {
  return (
    <Box
      className="flex flex-col gap-2 rounded-2xl pt-2 pb-4 overflow-hidden"
      sx={{
        bgcolor: (theme) => theme.palette.background.paper,
      }}
    >
      <ListItemButton className="flex gap-4" sx={{ height: 40 }}>
        <SchoolRounded
          sx={{
            width: 20,
            height: 20,
            color: (theme) => theme.palette.text.secondary,
          }}
        />
        <Typography variant="caption" color="text.secondary">
          Aprender
        </Typography>
      </ListItemButton>
      <Scroll className="gap-1">
        <ScrollItem>
          <iframe
            className="w-[calc(100vw_-_2rem)] aspect-video block rounded-2xl"
            src="https://www.youtube.com/embed/cjIswDCKgu0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </ScrollItem>
        <ScrollItem>
          <iframe
            className="w-[calc(100vw_-_2rem)] aspect-video block rounded-2xl"
            src="https://www.youtube.com/embed/QlqqAm9sTJg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </ScrollItem>
        <ScrollItem>
          <iframe
            className="w-[calc(100vw_-_2rem)] aspect-video block rounded-2xl"
            src="https://www.youtube.com/embed/SccSCuHhOw0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </ScrollItem>
      </Scroll>
    </Box>
  );
}
