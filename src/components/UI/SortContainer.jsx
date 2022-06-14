import { FaChevronDown } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { sortFiles } from '../../store/slices/files';
import { useLocation } from 'react-router';
const SortContainer = () => {
  const location = useLocation().pathname.slice(1);
  const dispatch = useDispatch();

  let dateType = location + 'At';
  if (location === 'all-files') dateType = 'createdAt';

  const sortHandler = (e) => {
    const type = e.target.value;
    dispatch(sortFiles({ type, dateType }));
  };
  return (
    <div className="sortContainer">
      <select placeholder="Sort By" onChange={sortHandler}>
        <option value="date"> By Date</option>
        <option value="size"> By Size</option>
        <option value="name"> By Name</option>
      </select>
      <FaChevronDown className="dropDownIcon" />
    </div>
  );
};

export default SortContainer;
