import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import BookIcon from "@components/icons/BookIcon";
import RocketIcon from "@components/icons/RocketIcon";
import SettingsIcon from "@components/icons/SettingsIcon";

const OverviewSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <BookIcon className="text-blue-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Overview</h2>
        </div>

        <div className="bg-linear-to-r from-blue-900 to-purple-900 p-6 rounded-lg border border-blue-500">
          <p className="text-lg leading-relaxed">
            This guide will help you integrate Jest testing framework into your
            project. You can either clone our pre-configured boilerplate or
            follow the step-by-step instructions to set up Jest from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <RocketIcon className="text-blue-400 mb-3" width={32} height={32} />
            <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
            <p className="text-gray-400">
              Clone the boilerplate and start testing immediately
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
            <SettingsIcon
              className="text-purple-400 mb-3"
              width={32}
              height={32}
            />
            <h3 className="text-xl font-semibold mb-2">Manual Setup</h3>
            <p className="text-gray-400">
              Integrate Jest into your existing project step-by-step
            </p>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-yellow-500">
          <h3 className="text-xl font-semibold mb-3 text-yellow-400">
            Prerequisites
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Node.js (v14 or higher)</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>npm or yarn package manager</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OverviewSection;
