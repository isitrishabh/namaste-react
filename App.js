/*
<div id="parent">
  <div id="child">
    <h1>This is h1 tag</h1>
  </div>
</div>

*/

const heading = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'heading' }, 'This is first h1 tag'),
    React.createElement('h1', { id: 'heading' }, 'This is second h1 tag'),
  ])
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
