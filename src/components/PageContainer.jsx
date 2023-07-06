import React from 'react';
import Proptypes from 'prop-types';

function PageContainer({ children }) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}

PageContainer.propTypes = {
  children: Proptypes.string.isRequired,
};

export default PageContainer;
