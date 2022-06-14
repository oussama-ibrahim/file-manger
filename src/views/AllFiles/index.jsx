import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FileStructureIcon from '../../assets/icons/FileStructure.svg';
import Files from '../../components/Files/File';
import SortContainer from '../../components/UI/SortContainer';
const AllFiles = () => {
  // get location
  const location = useLocation();
  // get query
  let query = location.search.slice(8);
  const data = useSelector((state) => state.files.files);
  let filterData = data;
  // filter data
  if (query) {
    filterData = data.filter((el) => el.name.includes(query));
  }
  return (
    <div className="all-files">
      <nav>
        <div className="logo-container">
          <div className="logo">
            <img src={FileStructureIcon} alt="" />
          </div>
          <h2> All Files</h2>
        </div>
        <SortContainer files={filterData} />
      </nav>
      <Files data={filterData} />
    </div>
  );
};
export default AllFiles;
