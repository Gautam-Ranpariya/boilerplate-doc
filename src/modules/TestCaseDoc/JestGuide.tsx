import { RootState } from '@lib/redux/store';
import { useSelector } from 'react-redux';
import { TestCaseMenuType } from '../../constant';
import BestSection from './BestSection';
import CommandSection from './CommandSection';
import Footer from './Footer';
import JestGuideHeader from './JestGuideHeader';
import JestGuideSidebar from './JestGuideSidebar';
import ManualSection from './ManualSection';
import OverviewSection from './OverviewSection';
import QuickStartSection from './QuickStartSection';
import TrobleShootSection from './TrobleShootSection';
import WritingSection from './WritingSection';
 
const JestGuide = () => {
  const { activeSection } = useSelector((state: RootState) => state.testCase);

  return (
    <div className="">
      {/* Header */}
      <JestGuideHeader />

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <JestGuideSidebar />

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg p-6 shadow-2xl">
              
              {/* Overview Section */}
              {activeSection === TestCaseMenuType.OVERVIEW && (
                <OverviewSection />
              )}

              {/* Quick Start Section */}
              {activeSection === TestCaseMenuType.QUICKSTART && (
                <QuickStartSection />
              )}

              {/* Manual Setup Section */}
              {activeSection === TestCaseMenuType.MANUAL && (
                <ManualSection />
              )}

              {/* Writing Tests Section */}
              {activeSection === TestCaseMenuType.WRITING && (
                <WritingSection />
              )}

              {/* Commands Section */}
              {activeSection === TestCaseMenuType.COMMANDS && (
                <CommandSection />
              )}

              {/* Best Practices Section */}
              {activeSection === TestCaseMenuType.BEST && (
                <BestSection />
              )}

              {/* Troubleshooting Section */}
              {activeSection === TestCaseMenuType.TROUBLESHOOT  && (
               <TrobleShootSection />
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default JestGuide