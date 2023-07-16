import React, {FC} from 'react';
import {HomeView} from './views/home.view';
import PortalProvider from './store/portal/portal.provider';
import {PortalConsumer} from './store/portal/portal.consumer';

const App: FC = () => {
  return (
    <PortalProvider>
      <PortalConsumer />
      <HomeView />
    </PortalProvider>
  );
};

export default App;
