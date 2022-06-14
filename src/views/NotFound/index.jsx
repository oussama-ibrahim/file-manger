import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="not-found">
      <h2> 404 Page Not Found</h2>
      <p> Oops:sorry we can't find that page !!</p>
      <Link to="/"> please go to home page ...</Link>
    </div>
  );
};

export default NotFound;
