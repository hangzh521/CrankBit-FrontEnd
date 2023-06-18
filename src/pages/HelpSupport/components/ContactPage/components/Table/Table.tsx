import { FC, useState } from 'react';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';

interface TableProps {
  onAnswerVisibilityChange: (isVisible: boolean) => void;
}

const Table: FC<TableProps> = ({ onAnswerVisibilityChange }: TableProps) => {
  const [isAnswerVisible1, setIsAnswerVisible1] = useState<boolean>(false);
  const [isAnswerVisible2, setIsAnswerVisible2] = useState<boolean>(false);
  const [isAnswerVisible3, setIsAnswerVisible3] = useState<boolean>(false);

  const toggleAnswerVisibility1 = (): void => {
    setIsAnswerVisible1(!isAnswerVisible1);
    onAnswerVisibilityChange(!isAnswerVisible1);
  };

  const toggleAnswerVisibility2 = (): void => {
    setIsAnswerVisible2(!isAnswerVisible2);
    onAnswerVisibilityChange(!isAnswerVisible2);
  };

  const toggleAnswerVisibility3 = (): void => {
    setIsAnswerVisible3(!isAnswerVisible3);
    onAnswerVisibilityChange(!isAnswerVisible3);
  };

  const handleAnswerVisibilityChange = (): JSX.Element => {
    const visibleAnswers = [isAnswerVisible1, isAnswerVisible2, isAnswerVisible3].filter(Boolean);
    const visibleAnswerCount = visibleAnswers.length;
  
    const newPageHeight = 900 + visibleAnswerCount * 100;
  
    return (
      <div>
        <p>New page height: {newPageHeight}</p>
      </div>
    );
  };

  return (
    <div className="w-[824px] h-[243] border-2 border-[rgba(3,17,27,0.2)] mt-10 bg-white flex flex-col justify-around rounded-lg">
      <div className="flex justify-between border-b-2 border-[rgba(3,17,27,0.2)] text-2xl font-bold items-center h-16 px-8">
        <div>Frequently Asked Questions</div>
      </div>
      
      <div className="flex justify-between border-b-2 border-[rgba(3,17,27,0.2)] text-base items-center h-16 px-8">
        <div>Will you be adding more templates later?</div>
        <button type="button" className="p-2 text-3xl" onClick={() => {
          toggleAnswerVisibility1();
          handleAnswerVisibilityChange();
        }}>
          {isAnswerVisible1 ? <VscTriangleUp className="text-blue-500" /> : <VscTriangleDown />}
        </button>
      </div>
      {isAnswerVisible1 && 
       (
          <div>
            <div className="flex text-base items-center h-30 px-8 bg-blue-400">
              <div className="text-white mt-7 mb-5">Yes, we will be adding more templates. If you would like to access additional templates, you can click on &apos;My Report&apos; in the left navigation. Then, click on &apos;New Report&apos; and choose a template you like to start recording.</div>
            </div>
          </div>
       )
      }

      <div className="flex justify-between border-b-2 border-[rgba(3,17,27,0.2)] text-base items-center h-16 px-8">
        <div>Can I create custom report from scratch?</div>
        <button type="button" className="p-2 text-3xl" onClick={() => {
          toggleAnswerVisibility2();
          handleAnswerVisibilityChange();
        }}>
          {isAnswerVisible2 ? <VscTriangleUp className="text-blue-500" /> : <VscTriangleDown />}
        </button>
      </div>
      {isAnswerVisible2 && 
          (
            <div>
              <div className="flex text-base items-center h-30 px-8 bg-blue-400">
                <div className="text-white mt-7 mb-5">Navigate to the form management or form list page.
Locate the specific form you want to remove and choose the corresponding option.
Confirm the deletion, following the system prompts or confirmation dialog. 
Additional options may be provided for handling related data.
Translate: Go to form management or form list page, delete it.</div>
              </div>
            </div>
          )
        }
      
      <div className="flex justify-between text-base items-center h-16 px-8">
        <div>How to remove your “Form created using Forms Ocean” tag?</div>
        <button type="button" className="p-2 rounded-full text-3xl" onClick={() => {
          toggleAnswerVisibility3();
          handleAnswerVisibilityChange();
        }}>
          {isAnswerVisible3 ? <VscTriangleUp className="text-blue-500" /> : <VscTriangleDown />}
        </button>
      </div>
        {isAnswerVisible3 && 
          (
            <div>
              <div className="flex text-base items-center h-30 px-8 bg-blue-400">
                <div className="text-white mt-7 mb-5">Navigate to the form management or form list page.
Locate the specific form you want to remove and choose the corresponding option.
Confirm the deletion, following the system prompts or confirmation dialog. 
Additional options may be provided for handling related data.
Translate: Go to form management or form list page, delete it.</div>
              </div>
            </div>
          )
        }
    </div>
  );
};

export default Table;

