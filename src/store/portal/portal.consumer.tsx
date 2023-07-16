import React, {FC} from 'react';
import {PortalContext} from './portal.context';

export const PortalConsumer: FC = () => {
  return (
    <PortalContext.Consumer>
      {value => {
        return <>{value.portalChildren}</>;
      }}
    </PortalContext.Consumer>
  );
};
