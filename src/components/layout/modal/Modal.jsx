import PropTypes from 'prop-types';
import * as S from './stylesModal';
import { XCircle } from 'phosphor-react';

export const Modal = ({ isOpen, children, setModalOpen, openModal }) => {
  if (isOpen) {
    return (
      <S.containerModal>
        <S.modal>
          <S.close onClick={setModalOpen}>
            <XCircle size={38} color="#000000" weight="fill" />
          </S.close>
          <S.containerChildren>{children}</S.containerChildren>
        </S.modal>
      </S.containerModal>
    );
  }

  return null;
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  openModal: PropTypes.any.isRequired,
};
