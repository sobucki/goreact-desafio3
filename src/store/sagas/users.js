import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';
import { Creators as ModalActions } from '../ducks/modal';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.username}`);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (!isDuplicated) {
      const userData = {
        id: data.id,
        username: data.login,
        name: data.name,
        avatar: data.avatar_url,
        cordinates: action.payload.cordinates,
      };
      yield put(UserActions.addUserSucess(userData));
      toast.success('Usuário adicionado com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  } catch (error) {
    console.tron.log(error);
    yield put(UserActions.addUserError('Não foi possível adicionar o usuário.'));
    toast.error('Não foi possível adicionar o usuário.', {
      position: toast.POSITION.TOP_RIGHT,
    });
  } finally {
    yield put(ModalActions.hideModal());
  }
}
