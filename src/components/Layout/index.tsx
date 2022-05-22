import React, { ReactNode, useState } from 'react';
import HomeLayout from './HomeLayout';
import SidelessHomeLayout from './SidelessHomeLayout';

type Props = {
  sidebar?: boolean;
  title?: string;
  children: ReactNode;
};

const Layout: React.VFC<Props> = ({ sidebar, title, children }) => {
  return (
    <>
      {sidebar ? (
        <HomeLayout {...{ title, children }} />
      ) : (
        <SidelessHomeLayout {...{ title, children }} />
      )}
    </>
  );
};
export default Layout;
