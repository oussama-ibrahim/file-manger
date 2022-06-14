import { useSearchParams } from 'react-router-dom';
import searchLogo from '../../assets/icons/Search.svg';
import settingsLogo from '../../assets/icons/Settings.svg';
import notificationBellLogo from '../../assets/icons/NotificationBell.svg';
import userImg from '../../assets/images/user.jpg';
const Header = () => {
  const [inputText, setInputText] = useSearchParams({});

  const inputHandler = (event) => {
    //convert input text to lower case
    let lowerCase = event.target.value.toLowerCase();
    // clean the input
    setInputText();
    // upgrade the URl
    if (lowerCase.trim().length > 0) setInputText({ filter: lowerCase });
  };
  return (
    <div input={inputText} className="header">
      <div className="inputContainer">
        <img className="icon" src={searchLogo} alt="" />
        <input type="text" onChange={inputHandler} placeholder="Search" />
      </div>
      <div className="userContainer">
        <div className="setttingContainer btn">
          <img src={settingsLogo} alt="" />
        </div>
        <div className="notificationContainer ">
          <img src={notificationBellLogo} alt="" />
          <div>18</div>
        </div>
        <div className="userName">Oussema</div>
        <div className="userImg">
          <img src={userImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
