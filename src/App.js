// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem } from './actions';

function App({ items, addItem, removeItem }) {
  // Example Component logic and JSX
  const handleAdd = () => {
    const newItem = { id: items.length, name: 'New Item' };
    addItem(newItem);
  };

  const handleRemove = itemId => {
    removeItem(itemId);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Item</button>
      {items.map(item => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = {
  addItem,
  removeItem
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
