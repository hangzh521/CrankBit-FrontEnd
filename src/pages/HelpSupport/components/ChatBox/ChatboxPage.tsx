import { Fragment, FC, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FiFolder } from 'react-icons/fi';
import { RiSendPlaneFill } from 'react-icons/ri';

interface DialogBoxProps {
  isOpen: boolean;
  handleClose: () => void;
}

const ChatboxPage: FC<DialogBoxProps> = ({ isOpen, handleClose }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' || event.key === ' ') {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node) &&
        !(event.target instanceof Element && event.target.closest('.chatbox-input'))
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClose]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0"
        onClose={handleClose}
      >
        <div className="flex flex-col justify-end items-end w-[1350px] h-[765px]" ref={dialogRef}>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
          <div className="inline-block mr-20 mb-20 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-2xl w-[400px] h-[500px] parent-container">
            <div className="h-[50px] bg-blue-400 flex justify-between">
              <Dialog.Title
                as="h3"
                className="text-xl font-bold text-white mt-3 ml-5"
              >
                Customer Service Live Chat
              </Dialog.Title>
              <div className="mt-0 mr-0">
                <button
                  type="button"
                  className="inline-flex text-xl font-bold text-white bg-blue-400 border border-transparent rounded-full hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={handleClose}
                >
                  &nbsp;&nbsp;x&nbsp;&nbsp;
                </button>
              </div>
            </div>
            <div className="mt-2 flex justify-start">
              <p className="flex ml-12 mr-8 text-sm text-blue-900 bg-blue-100 p-3 font-bold rounded-full">
                Hello! How can I do for you?
              </p>
            </div>
            <div className='flex justify-between my-element absolute bottom-0 w-[400px] rounded-xl h-[80px]'>
              <div>
                <input
                  type="text"
                  placeholder="输入聊天内容..."
                  className="px-4 py-2 mt-4 ml-2 w-[280px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 border-2 border-blue-400 chatbox-input"
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  onKeyDown={(event) => {
                    event.stopPropagation();
                    if (event.key === 'Enter') {
                      event.preventDefault();
                    }
                  }}
                />
              </div>
              <div className=''>
                <button type="button" className="flex mt-3 items-center justify-center hover:bg-blue-200 text-blue-500 w-12 h-12 rounded-full">
                  <RiSendPlaneFill className="text-4xl inline" />
                </button>
              </div>
              <div className='mr-4'>
                <button type="button" className="flex mt-3 items-center justify-center hover:bg-blue-200 text-blue-500 w-12 h-12 rounded-full">
                  <FiFolder className="text-4xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>

  );
};

export default ChatboxPage;

