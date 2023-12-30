import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';

const AppComponent = () => (
  <div className="AppLayout">
    <HeaderComponent />
    <BodyComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppComponent />);
