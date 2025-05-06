import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LegacyRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get('redirect');

    if (redirectPath?.startsWith('/casestudies/')) {
      const slug = redirectPath.replace('/casestudies/', '');
      navigate(`/unlock/${slug}`, { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  return <div>Redirecting...</div>;
};

export default LegacyRedirect;
