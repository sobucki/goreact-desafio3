import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import * as UserActions from '../../store/actions/users';

import './style.css';

const LeftBar = ({ users, addUser, removeUser }) => (
  <div className="floating-bar">
    <button type="button" onClick={() => addUser()}>
      Novo
    </button>
    {users.map(user => (
      <div className="item-bar" key={user.id}>
        <img className="avatar-item" src={user.avatar} alt="Avatar" />
        <div className="user-info">
          <strong>{user.name}</strong>
          <small>{user.username}</small>
        </div>
        <div className="btn-remove">
          <button type="button" onClick={() => removeUser(user.id)}>
            <i className=" btn-red fa  far fa-times-circle fa-2x" />
          </button>
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

LeftBar.propTypes = {
  removeUser: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      username: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeftBar);
