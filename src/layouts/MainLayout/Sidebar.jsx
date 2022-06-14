import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo';
import HomeIcon from '../../assets/icons/HomeMinimal.svg';
import FileStructureIcon from '../../assets/icons/FileStructure.svg';
import StarIcon from '../../assets/icons/Star.svg';
import BoxIcon from '../../assets/icons/Box.svg';
import UploadFiles from '../../components/Files/UploadFiles';
const Sidebar = () => {
  const sidebarElement = [
    {
      name: 'Home',
      icon: HomeIcon,
      link: '/',
    },
    {
      name: 'All Files',
      icon: FileStructureIcon,
      link: '/all-files',
    },
    {
      name: 'Starred',
      icon: StarIcon,
      link: '/starred',
    },
    {
      name: 'Archived',
      icon: BoxIcon,
      link: '/archived',
    },
  ];
  return (
    <div className="sidebar">
      <Logo className="logo" />
      <div className="sidebar-element">
        <UploadFiles />
        {sidebarElement.map((el, index) => {
          return (
            <NavLink
              className={({ isActive }) => (isActive ? 'active flex' : 'flex')}
              to={el.link}
              key={index}
            >
              <img src={el.icon} alt="" />
              <div>{el.name}</div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
