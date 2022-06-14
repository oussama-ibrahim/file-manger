import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = (props) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="container">
        <Header />
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;
