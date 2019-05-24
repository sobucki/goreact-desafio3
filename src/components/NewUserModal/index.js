/* eslint-disable max-len */
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as UserActions } from '../../store/ducks/users';

import './style.css';

Modal.setAppElement(document.getElementById('root'));

class NewUserModal extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      visible: PropTypes.bool,
      cordinates: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
    }).isRequired,
  };

  state = {
    inputUser: '',
  };

  handleInputChange = e => this.setState({ inputUser: e.target.value });

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { addUserRequest, modal } = this.props;
    const { inputUser } = this.state;
    const { cordinates } = modal;

    addUserRequest(inputUser, cordinates);
    this.setState({ inputUser: '' });
  };

  handleHideModal = () => {
    const { hideModal } = this.props;
    hideModal();
    this.setState({ inputUser: '' });
  };

  render() {
    const { inputUser } = this.state;
    const { modal, loading } = this.props;
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

const mapStateToProps = state => ({
  loading: state.users.loading,
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewUserModal);

// colocar o avatar no mapa
// e configurar mensagens de erro
