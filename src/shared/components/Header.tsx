// React Imports
import { useDispatch, useSelector } from "react-redux";

// Redux Imports
import { AppDispatch, RootState } from "../common/lib/redux/store";
import { setIsMobileMenuOpen } from "../common/lib/redux/slices/common";
import BellIcon from "./icons/BellIcon";
import ZapIcon from "./icons/ZapIcon";

const Header = () => {
  // Hooks
  const dispatch = useDispatch<AppDispatch>();
  const { isMobileMenuOpen } = useSelector((state: RootState) => state.layout);

  // handle mobile menu toggle
  const setMobileMenuOpen = (isOpen: boolean) => {
    dispatch(setIsMobileMenuOpen(isOpen));
  };

  return (
    <>
      <header className="bg-[#0B1120] border-b border-[#1E2535] fixed top-0 left-0 right-0 z-50">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-[#E5E7EB] hover:bg-[#243045]"
              >
                <ZapIcon />
              </button>
              <div className="text-2xl font-bold text-[#E5E7EB]">
                DocZone
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-[#E5E7EB] hover:bg-[#243045]">
                <BellIcon />
              </button>
              <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-semibold">
                G
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
