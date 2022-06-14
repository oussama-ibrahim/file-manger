import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import Files from '../../components/Files/File';
import DataSummary from './DataSummary';
import SidebarCard from './SidebarCard';

const Home = () => {
  // get location
  const location = useLocation();
  // get query
  let query = location.search.slice(8);
  const data = useSelector((state) => state.files.files.slice(0, 5));
  let filterData = data;
  // filter data
  if (query) {
    filterData = data.filter((el) => el.name.includes(query));
  }
  return (
    <div className="home">
      <DataSummary />
      <div className="recentFile">
        <div className="recentFile-container">
          <h1>Recent Files</h1>
          <Files data={filterData} />
        </div>
        <SidebarCard />
      </div>
    </div>
  );
};

export default Home;
