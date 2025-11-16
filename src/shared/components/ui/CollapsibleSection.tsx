import ChevronDownIcon from "@components/icons/ChevronDownIcon"
import ChevronRightIcon from "@components/icons/ChevronRightIcon"
import { setExpandedSections } from "@lib/redux/slices/common"
import { AppDispatch, RootState } from "@lib/redux/store"
import { useDispatch, useSelector } from "react-redux"

const CollapsibleSection = ({ title, children, id }: any) => {
    const {expandedSections} = useSelector((state: RootState) => state.layout)
    const dispatch = useDispatch<AppDispatch>()
    const isExpanded = expandedSections ? expandedSections[id] : false;

    const toggleSection = (section: string) => {
    dispatch(setExpandedSections(section))
  };
  return (
    <>
      <div className="border border-gray-700 rounded-lg mb-3 bg-gray-800">
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-750 transition-colors"
        >
          <span className="font-semibold text-white">{title}</span>
          {isExpanded ? <ChevronDownIcon width={20} height={20} /> : <ChevronRightIcon width={20} height={20} />}
        </button>
        {isExpanded && (
          <div className="p-4 pt-0 border-t border-gray-700">
            {children}
          </div>
        )}
      </div>
    </>
  )
}

export default CollapsibleSection
