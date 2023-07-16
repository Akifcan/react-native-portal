import React, {FC, ReactNode, useEffect} from 'react';
import {usePortal} from './portal.context';

export const Portal: FC<{children: ReactNode; watch: any[]}> = ({
  children,
  watch = [],
}) => {
  const portal = usePortal();

  useEffect(() => {
    portal.setPortalChildren(children);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...watch]);

  return <></>;
};
