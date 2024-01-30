import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, fs } from '../../config/Config'

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

    useEffect(() => {
      auth.onAuthStateChanged(user => {
        if (user) {
          fs.collection('users').doc(user.uid).get().then(snapshot => {
            setUser(snapshot.data().FullName);
          });
        } else {
          setUser(null)
        }
      })
    }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
