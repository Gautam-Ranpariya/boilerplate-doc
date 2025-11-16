// Next.js Imports
import { useRouter } from "next/navigation";

// React Imports
import { useDispatch, useSelector } from "react-redux";

// Data Imports
import { navigationMenu } from "../../data/layout";

// Redux Imports
import { setCurrentPage } from "../common/lib/redux/slices/common";
import { AppDispatch, RootState } from "../common/lib/redux/store";

const DesktopSidebar = () => {
  // Hooks
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { currentPage } = useSelector((state: RootState) => state.layout);

  // handle navigation click
  const handleNavClick = (id: string, path: string) => {
    dispatch(setCurrentPage(id as CommonTypes.Routes));
    router.push(path);
  };

  return (
    <>
      {/* <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-64 bg-white shadow-lg overflow-y-auto">
        <nav className="p-4">
          {Array.isArray(navigationMenu) &&
            navigationMenu.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.path)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 ${
                  currentPage === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
        </nav>
      </aside> */}

      <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-64 bg-[#111827] border-r border-[#1E2535] overflow-y-auto">
        <nav className="p-4">
          {navigationMenu.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id, item.path)}
              className={`w-full text-left flex items-center space-x-3 px-4 py-3 rounded-lg mb-1 transition ${
                currentPage === item.id
                  ? "bg-[#1F2937] text-[#FFFFFF]"
                  : "text-[#9CA3AF] hover:bg-[#243045] hover:text-[#E5E7EB]"
              }`}
            >
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default DesktopSidebar;
