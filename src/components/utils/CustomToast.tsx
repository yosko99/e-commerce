import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

interface Props {
  activateElement: React.ReactNode;
  body: string;
}

const CustomToast = ({ activateElement, body }: Props) => {
  const notify = () =>
    toast.info(body, {
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: 'm-2 shadow-sm me-4',
      progress: undefined,
      theme: 'light'
    });

  return (
    <div>
      <div onClick={notify}>{activateElement}</div>
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
    </div>
  );
};

export default CustomToast;
