import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from './Modal.styled';
import { Button } from '../Button/Button';
import CloseIcon from '@mui/icons-material/Close';

const modalRoot = document.querySelector('#modal-root') as HTMLDivElement;

interface IProps {
  readonly children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ onClose, children }: IProps) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent): any =>
      e.code === 'Escape' && onClose();

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = e => {
    e.target === e.currentTarget && onClose();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalStyled>
        <Button
          icon={<CloseIcon />}
          position="absolute"
          right={4}
          top={4}
          onClick={onClose}
        />
        {children}
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
