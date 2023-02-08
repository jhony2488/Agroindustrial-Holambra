import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Modal
} from '@mui/material';
import {
  CheckCircle,
  Warning,
  Info,
  XCircle,
} from 'phosphor-react';
import { PropsModal } from './types';
import { PropsButton } from '../Button/types'
import Button from '../Button'

import {
  ContainerTitle,
  Container,
  Title,
  Message,
  ContainerButton,
  ContainerButtons,
  ContainerButtonLeft,
  ContainerButtonRight,
  Wrapper,
  ContainerButtonsVertical,
} from './styles';

const ModalCard = ({ title,
  message,
  icon,
  buttons,
  show,
  onRequestClose,
  typeContainerButton,
  typeContainerTitle,
  children,
}: PropsModal) => {
  const isMobile = useMediaQuery({ query: '(max-width: 400px)' });

  return (

    <Modal open={show}
      onClose={onRequestClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Wrapper isMobile={isMobile}>
          <ContainerTitle typeContainerTitle={typeContainerTitle}>
            {icon === 'success' && <CheckCircle size={32} color="#30A46C" />}
            {icon === 'error' && <XCircle size={32} color="#E54D2E" />}
            {icon === 'warning' && <Warning size={32} color="#FEB601" />}
            {icon === 'info' && <Info size={32} color="#3585E9" />}
            <Title typeContainerTitle={typeContainerTitle}>{title}</Title>
          </ContainerTitle>
          <Message>{message}</Message>
          {children && children}
          {typeContainerButton === 'vertical' ? (
            <ContainerButtonsVertical>
              {buttons.map((button: PropsButton, index) => (
                <ContainerButton
                  typeContainerButton={typeContainerButton}
                  key={index}
                >
                  <Button
                    disabled={button.disabled}
                    loading={button.loading}
                    text={button.text}
                    onPress={button.onPress}
                    type={button.type}
                    typeColor={button.typeColor}
                  />
                </ContainerButton>
              ))}
            </ContainerButtonsVertical>

          ) : (
            <ContainerButtons>
              {buttons.map((button: PropsButton, index) => (
                <>
                  {index % 2 === 0 ? (
                    <ContainerButtonRight key={index}>
                      <Button
                        disabled={button.disabled}
                        loading={button.loading}
                        text={button.text}
                        onPress={button.onPress}
                        type={button.type}
                        typeColor={button.typeColor}
                      />
                    </ContainerButtonRight>
                  ) : (
                    <ContainerButtonLeft key={index}>
                      <Button
                        disabled={button.disabled}
                        loading={button.loading}
                        text={button.text}
                        onPress={button.onPress}
                        type={button.type}
                        typeColor={button.typeColor}
                      />
                    </ContainerButtonLeft>
                  )}
                </>
              ))}
            </ContainerButtons>
          )}
        </Wrapper>

      </Container>
    </Modal>

  );
};

export default ModalCard;
