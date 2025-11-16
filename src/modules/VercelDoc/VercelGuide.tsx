import { RootState } from "@lib/redux/store";
import { useSelector } from "react-redux";
import { VercelMenuType } from "../../constant";
import AdvanceSection from "./AdvanceSection";
import CICDSection from "./CICDSection";
import Footer from "./Footer";
import GithubSecretSection from "./GithubSecretSection";
import LocalConfigSection from "./LocalConfigSection";
import MonitoringSection from "./MonitoringSection";
import OverciewSection from "./OverciewSection";
import PrerequisitesSection from "./PrerequisitesSection";
import TestingSection from "./TestingSection";
import TokenSection from "./TokenSection";
import TroubleshootSection from "./TroubleshootSection";
import VercelGuideHeader from "./VercelGuideHeader";
import VercelGuideSidebar from "./VercelGuideSidebar";

const VercelGuide = () =>{
  const { activeSection } = useSelector((state: RootState) => state.vercel);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-100">
      {/* Header */}
      <VercelGuideHeader />

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <VercelGuideSidebar />

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg p-6 shadow-2xl">
              {/* Overview Section */}
              {activeSection === VercelMenuType.OVERVIEW && <OverciewSection />}

              {/* Prerequisites Section */}
              {activeSection === VercelMenuType.PREREQUISITES && (
                <PrerequisitesSection />
              )}

              {/* Local Configuration Section */}
              {activeSection === VercelMenuType.LOCAL_CONFIG && (
                <LocalConfigSection />
              )}

              {/* Token Generation Section */}
              {activeSection === VercelMenuType.TOKEN && <TokenSection />}

              {/* GitHub Secrets Section */}
              {activeSection === VercelMenuType.GITHUB_SECRETS && (
                <GithubSecretSection />
              )}

              {/* CI/CD Pipeline Section */}
              {activeSection === VercelMenuType.CICD && <CICDSection />}

              {/* Testing Section */}
              {activeSection === VercelMenuType.TESTING && <TestingSection />}

              {/* Monitoring Section */}
              {activeSection === VercelMenuType.MONITORING && (
                <MonitoringSection />
              )}

              {/* Advanced Section */}
              {activeSection === VercelMenuType.ADVANCED && <AdvanceSection />}

              {/* Troubleshooting Section */}
              {activeSection === VercelMenuType.TROUBLESHOOT && (
                <TroubleshootSection />
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

export default VercelGuide;