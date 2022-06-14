import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Fragment } from 'react';
import {
  deleteFile,
  archivedFile,
  startedFile,
} from '../../store/slices/files';
import TrashIcon from '../../assets/icons/Trash.svg';
import StarIcon from '../../assets/icons/Star.svg';
import BoxIcon from '../../assets/icons/Box.svg';
const FileAction = ({ id, isStarred, isArchived }) => {
  const location = useLocation();
  let currentLocation = location.pathname;
  const dispatch = useDispatch();
  const deleteHandler = () => {
    let type;
    if (currentLocation === '/archived') type = 'archived';
    if (currentLocation === '/starred') type = 'starred';
    dispatch(deleteFile({ id, type }));
  };
  return (
    <Fragment>
      {currentLocation === '/all-files' && (
        <li className="fileAction">
          <div
            className={
              isStarred ? 'active-action fileActionIcon' : 'star fileActionIcon'
            }
            onClick={() => dispatch(startedFile({ id }))}
          >
            <img src={StarIcon} alt="star" />
          </div>
          <div
            onClick={() => dispatch(archivedFile({ id }))}
            className={
              isArchived ? 'active-action fileActionIcon' : 'box fileActionIcon'
            }
          >
            <img src={BoxIcon} alt="Box " />
          </div>
        </li>
      )}

      {(currentLocation === '/archived' || currentLocation === '/starred') && (
        <li className="fileAction">
          <div className="trash fileActionIcon" onClick={deleteHandler}>
            <img src={TrashIcon} alt="trash" />
          </div>
        </li>
      )}
    </Fragment>
  );
};
export default FileAction;
