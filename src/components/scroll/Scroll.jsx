import { cx } from '@emotion/css';

export default function Scroll({ children, className }) {
  const classes = cx(
    'flex gap-3 overflow-x-scroll snap-mandatory snap-x scroll-pl-4 w-screen [scrollbar-width:none] px-4',
    className
  );
  return <div className={classes}>{children}</div>;
}
