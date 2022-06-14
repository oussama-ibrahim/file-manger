import { useLocation } from 'react-router-dom';
import BoxIcon from '../../assets/icons/Box.svg';
import { useSelector } from 'react-redux';
import SortContainer from '../../components/UI/SortContainer';
import Files from '../../components/Files/File';

const Archived = () => {
  const data = useSelector((state) => state.files.files);
  // get location
  const location = useLocation();
  // get query
  let query = location.search.slice(8);
  // filter data
  const File = data.filter(
    (el) => (el.isArchived === true) & el.name.includes(query)
  );

  return (
    <div className="archived">
      <nav>
        <div className="logo-container">
          <div className="logo">
            <img src={BoxIcon} alt="" />
          </div>
          <h2>Achived Files</h2>
        </div>
        <SortContainer />
      </nav>
      <Files data={File} />
    </div>
  );
};

export default Archived;
