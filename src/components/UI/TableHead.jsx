import { useLocation } from 'react-router';
const TableHead = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  let tableDate = 'Date created';
  if (currentLocation === '/starred') tableDate = 'Date Starred';
  if (currentLocation === '/archived') tableDate = 'Date Archived';
  return (
    <ul className="table-head">
      <li className="name">Name</li>
      {<li className="date">{tableDate}</li>}
      <li className={currentLocation === '/' ? 'size-home' : ''}>Size</li>
      {currentLocation !== '/' && <li className="actions">Actions</li>}
    </ul>
  );
};

export default TableHead;
