import { cx } from '@emotion/css';

export default function ScrollItem({ children, className }) {
  const classes = cx('w-max snap-start', className);

  return <div className={classes}>{children}</div>;
}
