import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();
  console.log(location);
  if (!user) {
    return (
      <Navigate to="/login"
    state={{ pathname: location.pathname }}
    replace
     />
    )
  }
  return children;
};

export default ProtectedRoute;

{
  /*In the component, we checked the user’s login status to render children prop or redirect the user to a login page.

    We didn’t use the useNavigate Hook in the render because the rules of React Hooks also applied to it. That was why we reached out to its Navigate counterpart.
 */
}