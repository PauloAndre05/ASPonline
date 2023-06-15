import PropTypes from 'prop-types';
import * as S from './styleConsultarAgenda';
import { X } from 'phosphor-react';
 
export const Modal = ({ isOpen, children, setModalOpen, openModal }) => {
  if (isOpen) {
    return (
      <S.containerModal>
        <S.modal> 
            <S.close onClick={setModalOpen}>
            <X size={28} weight="fill" />
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
