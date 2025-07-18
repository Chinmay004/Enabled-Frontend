import { Navigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import PropTypes from 'prop-types';
// import Verify from './Verify';
const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  // If user is logged in but email is not verified
  // if (user && !user.emailVerified) {
  //   return <Navigate to="/verify" />;
  // }

  // If user is logged in and verified
  if (user) {
    return children;
  }

  // If not logged in at all
  return <Navigate to="/signUp" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
