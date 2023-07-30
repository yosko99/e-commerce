import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

interface Props {
  activateElement: React.ReactNode;
  body: string;
  type: 'default' | 'error' | 'info' | 'success' | 'warning';
}

const CustomToast = ({ activateElement, body, type }: Props) => {
  const notify = () =>
    toast(body, {
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: 'm-2 me-4 shadow-none border',
      progress: undefined,
      theme: 'light',
      type
    });

  return (
    <span>
      <span onClick={notify}>{activateElement}</span>
      <ToastContainer
        position="bottom-left"
        autoClose={50000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </span>
  );
};

export default CustomToast;
