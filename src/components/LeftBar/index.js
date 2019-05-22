import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';

const LeftBar = ({ users }) => (
  <div className="floating-bar">
    {users.map(user => (
      <div className="item-bar" key={user.id}>
        <img className="avatar-item" src={user.avatar} alt="Avatar" />
        <div className="user-info">
          <strong>{user.name}</strong>
          <small>{user.username}</small>
        </div>
        <div className="btn-remove">
          <i className=" btn-red fa  far fa-times-circle fa-2x" />
        </div>
        <div className="btn-view btn-red">
          <a className="btn-red" href="/">
            <i className=" fa fas fa-chevron-right fa-2x" />
          </a>
        </div>
      </div>
    ))}
  </div>
);
LeftBar.defaultProps = { users: '' };

LeftBar.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(LeftBar);
