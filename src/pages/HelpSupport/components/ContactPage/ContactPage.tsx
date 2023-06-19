import { useState, FC } from 'react'
import { BiEnvelope, BiPhone, BiChat } from 'react-icons/bi';
import ChatboxPage from '../ChatBox/ChatboxPage';

interface OpenButtonProps {
  handleOpen: () => void;
}

const OpenButton: FC<OpenButtonProps> = ({ handleOpen }) => (
  <button 
    type="button"
    onClick={handleOpen}
    className="w-[200px] h-[40px] hover:bg-[#007AD3] text-base border rounded-lg hover:text-white border-blue-500 bg-white"
  >
    <div className="hover:text-white text-blue-500">Start a Chat Now</div>
  </button>
);

const ContactPage: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setIsOpen(true);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-row box-border mt-8 mb-8">
      <div className="box-border border-2 w-[392px] h-[300px] bg-white border border-[rgba(3,17,27,0.2)] rounded-lg flex flex-col justify-around">
        <div className="border-b-2 border-[rgba(3,17,27,0.2)] h-[75px] flex items-center">
          <div className="text-black font-bold flex ml-4 text-2xl">
            Contact
          </div>
        </div>
        <div className="border-b-2 border-[rgba(3,17,27,0.2)]">
          <div className="flex ml-10 mb-6">
            <div className=""><BiPhone className="text-7xl inline mr-10" /></div>
            <div className="flex flex-col justify-center items-center text-black text-base">
              <div>+91 9983XX7898</div>
              <div className="flex mt-4">+91 9983XX7897</div>
            </div>
          </div>
        </div>
        <div className="flex justify-start ml-10">
          <div className="flex items-center mb-5"><BiEnvelope className="text-7xl inline mr-10" /></div>
          <div className="flex flex-col text-black text-base">
            <a href="mailto:support@crankbit.com" className="flex justify-center text-blue-500 underline text-blue-400">
              support@crankbit.com
            </a>
            <a href="mailto:help@crankbit.com" className="flex justify-center mt-4 text-blue-500 underline text-blue-400 mr-6">
              help@crankbit.com
            </a>
          </div>
        </div>
      </div>
      <div className="w-[392px] h-[300px] bg-white border-2 border-[rgba(3,17,27,0.2)] rounded-lg flex flex-col m-0 mx-10">
        <div>
          <div className="border-b-2 border-[rgba(3,17,27,0.2)] h-[80px] flex items-center"><div className="text-black font-bold ml-4 text-2xl">Chat with our Experts</div></div>
        </div>
        <div className="flex flex-col">
          <div className="flex h-[100px] items-center justify-center">
            <BiChat className="text-7xl inline" />
          </div>
          <div className="flex justify-center mr-7 ml-7">
            <div className="text-black text-base">
              Chat with one of our experts. They can answer, guide and resolve your issues.
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex h-[70px] items-center justify-center">
              <OpenButton handleOpen={handleOpen} />
            </div>
            <div className=""><ChatboxPage isOpen={isOpen} handleClose={handleClose} /></div>
          </div>
          
        </div>
        
      </div>
      
    </div>
    
  );
}


export default ContactPage
