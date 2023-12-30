import React from 'react';
import ReactDOM from 'react-dom/client';

//JSX is transpiled by Parcel(Babel) before reaching JS Engine
// JSX--> Babel-->createElement--> React Element(Object)--> Render --> HTML Element
// In JSX we write attribute in camelCase
// It is mandatory to use () if you write JSX in multiple lines

//React Element
const TitleComponent = () => (
  <h1 id="title">Namastey React🚀 from Title Component</h1>
);

const headingJSX = (
  <div>
    <h1 id="heading">Namastey React🚀</h1>
    {TitleComponent()}
  </div>
);

//React Components
//1. Functional Components
//2. Class Components

const HeadingComponent = () => {
  return (
    <div id="container">
      <TitleComponent />
      {TitleComponent()}
      {headingJSX}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
