import React from 'react';
import Proptypes from 'prop-types';

function PageContainer({ children }) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}

PageContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: Proptypes.array.isRequired,
};

export default PageContainer;
