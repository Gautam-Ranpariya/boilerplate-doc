import { RootState } from "@lib/redux/store";
import { useSelector } from "react-redux";
import { PwaMenuType } from "../../constant";
import BenefitSection from "./BenefitSection";
import DeploymentSection from "./DeploymentSection";
import IconSection from "./IconSection";
import InstallationSection from "./InstallationSection";
import NotificationSection from "./NotificationSection";
import OfflineSection from "./OfflineSection";
import OverviewSection from "./OverviewSection";
import PWAFooter from "./PWAFooter";
import PWAHeader from "./PWAHeader";
import PWASidebar from "./PWASidebar";
import ServiceWorkerSection from "./ServiceWorkerSection";
import TestingSection from "./TestingSection";
import TroubleShootSection from "./TroubleShootSection";
import MeniFestSection from "./MeniFestSection";

const PWAGuide = () => {
  const { activeSection } = useSelector((state: RootState) => state.pwa);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-100">
      {/* Header */}
      <PWAHeader />

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <PWASidebar />

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg p-6 shadow-2xl">
              {/* Overview Section */}
              {activeSection === PwaMenuType.OVERVIEW && <OverviewSection />}

              {/* Benefits Section */}
              {activeSection === PwaMenuType.BENEFITS && <BenefitSection />}

              {/* Installation Section */}
              {activeSection === PwaMenuType.INSTALLATION && (
                <InstallationSection />
              )}

              {/* Manifest Section */}
              {activeSection === PwaMenuType.MANIFEST && <MeniFestSection />}

              {/* Service Worker Section */}
              {activeSection === PwaMenuType.SERVICE_WORKER && (
                <ServiceWorkerSection />
              )}

              {/* Icons & Assets Section */}
              {activeSection === PwaMenuType.ICONS && <IconSection />}

              {/* Offline Support Section */}
              {activeSection === PwaMenuType.OFFLINE && <OfflineSection />}

              {/* Push Notifications Section */}
              {activeSection === PwaMenuType.NOTIFICATIONS && (
                <NotificationSection />
              )}

              {/* Testing Section */}
              {activeSection === PwaMenuType.TESTING && <TestingSection />}

              {/* Deployment Section */}
              {activeSection === PwaMenuType.DEPLOYMENT && (
                <DeploymentSection />
              )}

              {/* Troubleshooting Section */}
              {activeSection === PwaMenuType.TROUBLESHOOT && (
                <TroubleShootSection />
              )}
            </div>
          </main>
        </div>

        {/* Footer */}
        <PWAFooter />
      </div>
    </div>
  );
};

export default PWAGuide;
