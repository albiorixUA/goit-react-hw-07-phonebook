import { Modal } from 'react-bootstrap';
import { ButtonModal } from './EditContactModal.styled';
import Form from 'components/Form';
import { useGetContactByIdQuery } from 'redux/contactsSlice';

export default function EditContactModal({ hide, onSubmit, contactId }) {
  const { data } = useGetContactByIdQuery(contactId);

  return (
    <>
      <Modal show onHide={hide} size="sm" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data && (
            <Form onSubmit={onSubmit} toggleModal={hide} initialValues={data}>
              <ButtonModal variant="secondary" onClick={hide}>
                Close
              </ButtonModal>
              <ButtonModal variant="primary" type="submit">
                Edit
              </ButtonModal>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
