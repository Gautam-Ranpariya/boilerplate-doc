import { useDispatch, useSelector } from "react-redux";
import { navigationMenu } from "../../data/layout";
import {
  setCurrentPage,
  setIsMobileMenuOpen,
} from "../common/lib/redux/slices/common";
import { AppDispatch, RootState } from "../common/lib/redux/store";
import { useRouter } from "next/navigation";

const MobileDrawer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentPage, isMobileMenuOpen } = useSelector(
    (state: RootState) => state.layout
  );
  const router = useRouter();

  // handle mobile menu toggle
  const setMobileMenuOpen = (isOpen: boolean) => {
    dispatch(setIsMobileMenuOpen(isOpen));
  };

  // handle navigation click
  const handleNavClick = (id: string, path: string) => {
    dispatch(setIsMobileMenuOpen(false));
    dispatch(setCurrentPage(id as CommonTypes.Routes));
    router.push(path);
  };

  return (
    <>
      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-blue-600">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default MobileDrawer;
