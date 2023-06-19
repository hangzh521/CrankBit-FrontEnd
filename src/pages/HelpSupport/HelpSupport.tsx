import { FC, useState } from 'react';
import SideNavigationBar from '@/components/SideNavigationBar';
import Container from '@/layouts/Container/Container';
import PageContent from '@/components/PageContent/PageContent';
import ContactPage from './components/ContactPage/ContactPage';
import Table from './components/ContactPage/components/Table';
import QAHeader from './components/ContactPage/components/Table/components/QAHeader';

const HelpSupport: FC = () => {
  const [pageHeight, setPageHeight] = useState<number>(1100);

  const handleAnswerVisibilityChange = (isVisible: boolean): void => {
    if (isVisible) {
      setPageHeight((prevHeight) => prevHeight + 100);
    } else {
      setPageHeight((prevHeight) => prevHeight - 100);
    }
  };

  return (
    <Container>
      <div className={`min-h-[${pageHeight}px] flex`}>
        <div className="text-xl">
          <SideNavigationBar />
        </div>
        <div className="bg-blue-50 mx-auto min-h-[830px] overflow-y-auto">
          <PageContent>
            <QAHeader />
            <Table onAnswerVisibilityChange={handleAnswerVisibilityChange} />
            
            <ContactPage />
            
          </PageContent>
          
        </div>
      </div>
    </Container>
  );
};

export default HelpSupport;

