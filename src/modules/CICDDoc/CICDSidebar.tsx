import { ciCdMenuData } from "@data/ci-cd";
import { setActiveSection } from "@lib/redux/slices/ci-cd";
import { AppDispatch, RootState } from "@lib/redux/store";
import { useDispatch, useSelector } from "react-redux";

const CICDSidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activeSection } = useSelector((state: RootState) => state.ciCd);

  // handle naviagte to section
  const handleNavigateToSection = (sectionId: CICD.CiCdMenuType) => {
    dispatch(setActiveSection(sectionId));
  };
  return (
    <>
      <aside className="lg:col-span-1">
        <div className="bg-gray-800 rounded-lg p-4 sticky top-24">
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            Navigation
          </h3>
          <nav className="space-y-2">
            {ciCdMenuData &&
              ciCdMenuData.map((section: CICD.ICICDDocMenuItem) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleNavigateToSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                    }`}
                  >
                    {section.icon}
                    <span className="text-sm">{section.name}</span>
                  </button>
                );
              })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default CICDSidebar;
