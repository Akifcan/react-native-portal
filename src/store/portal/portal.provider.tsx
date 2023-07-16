import React, {FC, ReactNode, useState} from 'react';
import {PortalContext} from './portal.context';

const PortalProvider: FC<{children: ReactNode}> = ({children}) => {
  const [portalChildren, setPortalChildren] = useState<ReactNode>();
  return (
    <PortalContext.Provider value={{portalChildren, setPortalChildren}}>
      {children}
    </PortalContext.Provider>
  );
};

export default PortalProvider;
