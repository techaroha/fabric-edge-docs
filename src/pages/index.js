import React, { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    // Redirect to a specific URL after 2 seconds (you can adjust the delay as needed)
    const redirectTimeout = setTimeout(() => {
      window.location.href = '/docs/overview'; // Replace 'https://www.example.com' with the URL you want to redirect to
    }, 500);

    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div>
      If you are not redirected automatically, follow this <a href='docs/overview'>link</a>.
    </div>
  );
};

export default RedirectPage;