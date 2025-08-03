import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { ProductProvider } from './context/ProductContext';
import { LoginUserProvider } from './context/LoginUserContext';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ThemeProvider>
      <LoginUserProvider>
        <UserProvider>
          <ProductProvider>
            <Router>
              <Routes>
                <Route path="/*" element={<Dashboard />} />
              </Routes>
            </Router>
          </ProductProvider>
        </UserProvider>
      </LoginUserProvider>
    </ThemeProvider>
  );
}

export default App;
