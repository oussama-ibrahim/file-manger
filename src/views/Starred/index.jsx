import { useLocation } from 'react-router';
import StarIcon from '../../assets/icons/Star.svg';
import { useSelector } from 'react-redux';
import SortContainer from '../../components/UI/SortContainer';
import Files from '../../components/Files/File';

const Starred = () => {
  // get location
  const location = useLocation();
  // get query
  let query = location.search.slice(8);
  // filter data
  const data = useSelector((state) => state.files.files);
  const File = data.filter(
    (el) => (el.isStarred === true) & el.name.includes(query)
  );

  return (
    <div className="starred">
      <nav>
        <div className="logo-container">
          <div className="logo">
            <img src={StarIcon} alt="" />
          </div>
          <h2> Starred Files</h2>
        </div>
        <SortContainer />
      </nav>
      <Files data={File} />
    </div>
  );
};

export default Starred;
