import { RootState } from "@lib/redux/store";
import { useSelector } from "react-redux";
import { CiCdMenuType } from "../../constant";
import CICDHeader from "./CICDHeader";
import CICDSidebar from "./CICDSidebar";
import CodeOwnerSection from "./CodeOwnerSection";
import CustomizationIconSection from "./CustomizationIconSection";
import Footer from "./Footer";
import MonitoringSection from "./MonitoringSection";
import OverviewSection from "./OverviewSection";
import PipelineSection from "./PipelineSection";
import SecretSection from "./SecretSection";
import StructureSection from "./StructureSection";
import TroubleShootSection from "./TroubleShootSection";
import WorkFlowSection from "./WorkFlowSection";

const CICDGuide = () => {
  const { activeSection } = useSelector((state: RootState) => state.ciCd);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-100">
      {/* Header */}
      <CICDHeader />

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <CICDSidebar />

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg p-6 shadow-2xl">
              {/* Overview Section */}
              {activeSection === CiCdMenuType.OVERVIEW && <OverviewSection />}

              {/* Project Structure Section */}
              {activeSection === CiCdMenuType.STRUCTURE && <StructureSection />}

              {/* CODEOWNERS Section */}
              {activeSection === CiCdMenuType.CODEOWNERS && (
                <CodeOwnerSection />
              )}

              {/* Pipeline Configuration Section */}
              {activeSection === CiCdMenuType.PIPELINE && <PipelineSection />}

              {/* Secrets Setup Section */}
              {activeSection === CiCdMenuType.SECRETS && <SecretSection />}

              {/* How It Works Section */}
              {activeSection === CiCdMenuType.WORKFLOWS && <WorkFlowSection />}

              {/* Customization Section */}
              {activeSection === CiCdMenuType.CUSTOMIZATION && (
                <CustomizationIconSection />
              )}

              {/* Monitoring Section */}
              {activeSection === CiCdMenuType.MONITORING && (
                <MonitoringSection />
              )}

              {/* Troubleshooting Section */}
              {activeSection === CiCdMenuType.TROUBLESHOOT && (
                <TroubleShootSection />
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CICDGuide;
