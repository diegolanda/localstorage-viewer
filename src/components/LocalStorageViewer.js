import React from 'react';
import PropTypes from 'prop-types';
import './localstorage-viewer.css';

const renderLocalStorageItems = (options, renderer) => {
  const items = []
  Object.keys(localStorage || {}).forEach((key, idx) => {
    const item = renderer ?
      renderer(idx, key, localStorage.getItem(key)) : 
      (
        <div className="storage-item-row" key={`${key}_${+new Date()}`}>
          {
            options.indexed && <span className="storage-item idx">{idx}</span>
          }
          <span className="storage-item key">{key}</span>
          <pre className="storage-item value">
            {localStorage.getItem(key)}
          </pre>
        </div>
      )
    items.push(item)
  })

  return items
}
/**
 * Primary UI component for user interaction
 */
export const LocalStorageViewer = ({ indexed }) => {
  return (
    <div className="storage-table">
      {renderLocalStorageItems({
        indexed
      })}
    </div>
  );
};

LocalStorageViewer.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  indexed: PropTypes.bool,
  /**
   * Optional Item Renderer handler
   */
  onItemRender: PropTypes.func,
};

LocalStorageViewer.defaultProps = {
  indexed: false,
};
