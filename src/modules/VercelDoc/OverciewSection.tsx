import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import RocketIcon from "@components/icons/RocketIcon";

const OverciewSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <RocketIcon className="text-blue-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Overview</h2>
        </div>

        <div className="bg-linear-to-r from-blue-900 to-purple-900 p-6 rounded-lg border border-blue-500">
          <p className="text-lg leading-relaxed">
            This guide will walk you through the complete process of setting up
            automated deployments to Vercel using GitHub Actions. You'll learn
            how to configure tokens, secrets, and CI/CD pipelines for a seamless
            deployment experience.
          </p>
        </div>

        <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-400 flex items-center space-x-2">
            <BadgeCheckIcon width={24} height={24} />
            <span>What You'll Achieve</span>
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Automatic deployments on every push</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Secure authentication with Vercel</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Professional CI/CD pipeline</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Protected deployment environment</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OverciewSection;
