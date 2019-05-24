import React, { Fragment } from 'react';

import Map from '../../components/Map';
import LeftBar from '../../components/LeftBar';
import NewUserModal from '../../components/NewUserModal';

const Main = () => (
  <Fragment>
    <Map />
    <LeftBar />
    <NewUserModal />
  </Fragment>
);

export default Main;
