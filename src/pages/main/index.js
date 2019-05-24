import React, { Fragment } from 'react';

import { ToastContainer } from 'react-toastify';
import Map from '../../components/Map';
import LeftBar from '../../components/LeftBar';
import NewUserModal from '../../components/NewUserModal';

const Main = () => (
  <Fragment>
    <Map />
    <LeftBar />
    <NewUserModal />
    <ToastContainer autoClose={5000} />
  </Fragment>
);

export default Main;
