import React, { Suspense, ReactNode } from 'react';

interface LazyLoadWrapperProps {
  children: ReactNode;
}

const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({ children }) => {
  return <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>;
};

export default LazyLoadWrapper;
