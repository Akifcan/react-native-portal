import {createContext, useContext, ReactNode} from 'react';
export interface PortalContextProps {
  portalChildren: ReactNode;
  setPortalChildren: (children: ReactNode) => void;
}
export type PortalContextType = {
  portalChildren: ReactNode;
  setPortalChildren: (children: ReactNode) => void;
};
export const PortalContext = createContext<PortalContextType>({
  portalChildren: [],
  setPortalChildren: () => console.warn('no portal provider'),
});
export const usePortal = () => useContext(PortalContext);
