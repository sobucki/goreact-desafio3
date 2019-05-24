/* eslint-disable max-len */
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import * as ModalActions from '../../store/actions/modal';
import * as UserActions from '../../store/actions/users';

import './style.css';

Modal.setAppElement(document.getElementById('root'));

class NewUserModal extends Component {
  state = {
    inputUser: '',
  };

  handleInputChange = e => this.setState({ inputUser: e.target.value });

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { addUser, hideModal } = this.props;
    const { inputUser } = this.state;

    addUser(inputUser);
    this.setState({ inputUser: '' });
    hideModal();
  };

  handleHideModal = () => {
    const { hideModal } = this.props;
    hideModal();
    this.setState({ inputUser: '' });
  };

  render() {
    const { inputUser, loading } = this.state;
    const { modal } = this.props;
    return (
      <Modal
        isOpen={modal.visible}
        onRequestClose={this.handleHideModal}
        contentLabel="Add User Modal"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <h2>Adicionar novo usuário</h2>
        <form onSubmit={this.handleFormSubmit} className="form">
          <input
            placeholder="Usuário do Github"
            value={inputUser}
            onChange={this.handleInputChange}
          />
          <div className="buttons-container">
            <button type="button" onClick={this.handleHideModal}>
              Cancelar
            </button>
            <button type="submit">
              {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Salvar'}
            </button>
          </div>
        </form>
      </Modal>
    );
  }
}

NewUserModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  modal: PropTypes.shape({
    visible: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewUserModal);
