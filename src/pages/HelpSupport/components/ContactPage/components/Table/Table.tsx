import { FC, useState } from 'react';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';

interface TableProps {
  onAnswerVisibilityChange: (isVisible: boolean) => void;
}
const Table: FC<TableProps> = ({ onAnswerVisibilityChange }: TableProps) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState<boolean[]>([false, false, false]);
  const questions = [
    {
      id: 1,
      question: "Will you be adding more templates later?",
      answer: "Yes, we will be adding more templates. If you would like to access additional templates, you can click on 'My Report' in the left navigation. Then, click on 'New Report' and choose a template you like to start recording."
    },
    {
      id: 2,
      question: "Can I create custom report from scratch?",
      answer: "Navigate to the form management or form list page. Locate the specific form you want to remove and choose the corresponding option. Confirm the deletion, following the system prompts or confirmation dialog. Additional options may be provided for handling related data. Translate: Go to form management or form list page, delete it."
    },
    {
      id: 3,
      question: "How to remove your “Form created using Forms Ocean” tag?",
      answer: "Navigate to the form management or form list page. Locate the specific form you want to remove and choose the corresponding option. Confirm the deletion, following the system prompts or confirmation dialog. Additional options may be provided for handling related data. Translate: Go to form management or form list page, delete it."
    }
  ];
  const toggleAnswerVisibility = (index: number): void => {
    const newVisibility = [...isAnswerVisible];
    newVisibility[index] = !newVisibility[index];
    setIsAnswerVisible(newVisibility);
    onAnswerVisibilityChange(newVisibility[index]);
  };
  const handleAnswerVisibilityChange = (): JSX.Element => {
    const visibleAnswerCount = isAnswerVisible.filter(Boolean).length;
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
      {questions.map((questionItem) => (
        <div key={questionItem.id}>
          <div className="flex justify-between border-b-2 border-[rgba(3,17,27,0.2)] text-base items-center h-16 px-8">
            <div>{questionItem.question}</div>
            <button type="button" className="p-2 text-3xl" onClick={() => {
              toggleAnswerVisibility(questionItem.id - 1);
              handleAnswerVisibilityChange();
            }}>
              {isAnswerVisible[questionItem.id - 1] ? <VscTriangleUp className="text-blue-500" /> : <VscTriangleDown />}
            </button>
          </div>
           {isAnswerVisible[questionItem.id - 1] && (
            <div>
              <div className="flex text-base items-center h-30 px-8 bg-blue-400">
                <div className="text-white mt-7 mb-5">{questionItem.answer}</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Table;
