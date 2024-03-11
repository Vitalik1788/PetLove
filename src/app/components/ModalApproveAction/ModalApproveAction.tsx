import React from "react"
import Modal from "react-modal";

export interface IApproveModal {
  approveModalOpen: boolean;
  closeApproveModal: () => void;
}

export default function ModalApproveAction({ approveModalOpen, closeApproveModal }: IApproveModal) {
  return (
    <>
      <Modal
        isOpen={approveModalOpen}
        onRequestClose={closeApproveModal}
        ariaHideApp={false}
        contentLabel="Logout confirm modal"
      >

        
      </Modal>
    </>
  );
}

