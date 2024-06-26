// TokenExpirationCheck.js

import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const TokenExpirationCheck = (WrappedComponent) => {
  const TokenExpirationCheckWrapper = (props) => {
    useEffect(() => {
      const checkTokenExpiration = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
          return;
        }

        const decodedToken = jwtDecode(token);
        const expirationTime = decodedToken.exp * 1000;
        const currentTime = Date.now();
        const timeUntilExpiration = expirationTime - currentTime;

        const alertTime = 20 * 1000;

        const timeoutId = setTimeout(async () => {
          const userChoice = window.confirm('Your session is about to expire. Do you want to refresh your session?');

          if (userChoice) {
            try {
              const response = await axios.post('http://167.99.61.114:4219/api/refreshToken', {
                refreshToken: localStorage.getItem('token'),
              });

              const newToken = response.data.accessToken;
              localStorage.removeItem('token');
              localStorage.setItem('token', newToken);

              window.location.reload();
            } catch (error) {
              console.error('Error refreshing token:', error);
              localStorage.removeItem('token');
              window.location.href = 'http://167.99.61.114:3000/login';
            }
          } else {
            localStorage.removeItem('token');
            window.location.href = 'http://167.99.61.114:3000/login';
          }
        }, timeUntilExpiration - alertTime);

        // Clear the timeout when the component unmounts or the effect is re-triggered
        return () => clearTimeout(timeoutId);
      };

      checkTokenExpiration();
    }, []); // Empty dependency array ensures that the effect runs only once

    return <WrappedComponent {...props} />;
  };

  return TokenExpirationCheckWrapper;
};

export default TokenExpirationCheck;
