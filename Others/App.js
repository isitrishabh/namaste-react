import React from 'react';
import ReactDOM from 'react-dom/client';
/*
<div id="parent">
 <div id="child">
 <h1 id="heading1"> This is h1 tag </h1>
 <h2 id="heading2"> This is h2 tag </h1>
 </div>
</div>
*/
// createElement--> React Element(Object)--> Render--> HTML Element
const heading = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'heading1' }, 'This is first h1 tag'),
    React.createElement('h1', { id: 'heading2' }, 'This is second h1 tag'),
  ])
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
console.log(heading);
