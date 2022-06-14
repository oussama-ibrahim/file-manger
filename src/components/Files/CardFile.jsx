import { useLocation } from 'react-router-dom';
import bytesToSize from '../../utils/bytesToSize';
import addIcon from '../../utils/addIcon';
import dateFormat from '../../utils/dateFormat';
import FileAction from './FileAction';

const CardFile = ({
  name,
  size,
  type,
  createdAt,
  id,
  isStarred,
  isArchived,
  starredAt,
  archivedAt,
}) => {
  const location = useLocation();
  let currentLocation = location.pathname;
  let dateType = createdAt;
  if (currentLocation === '/starred') dateType = starredAt;
  if (currentLocation === '/archived') dateType = archivedAt;
  const newSize = bytesToSize(size);
  const newDate = dateFormat(dateType);
  const icon = addIcon(type);

  return (
    <ul
      key={id}
      className={
        currentLocation === '/'
          ? 'card-file-home card-file'
          : 'card-file-action card-file'
      }
    >
      <li className="fileName">
        <div className="file-icon">
          <img src={icon} alt="" />
          {currentLocation === '/all-files' && (
            <div>
              {isStarred && <div className="file-starred point"></div>}
              {isArchived && <div className="file-archived point"></div>}
            </div>
          )}
        </div>
        {name}.{type}
      </li>
      <li className="fileDate">{newDate}</li>
      <li className="fileSize"> {newSize}</li>
      <FileAction id={id} isStarred={isStarred} isArchived={isArchived} />
    </ul>
  );
};

export default CardFile;
