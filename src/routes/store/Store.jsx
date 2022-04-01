import { Outlet } from 'react-router-dom';

export default function Store() {
  return (
    <div className="p-4">
      <header>
        <div>business logo</div>
        <div>business name</div>
        <div>store settings</div>
      </header>

      <Outlet />
    </div>
  );
}
