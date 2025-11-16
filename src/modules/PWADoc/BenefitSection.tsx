import BellIcon from "@components/icons/BellIcon";
import DownloadIcon from "@components/icons/DownloadIcon";
import ShieldIcon from "@components/icons/ShieldIcon";
import SmartPhoneIcon from "@components/icons/SmartPhoneIcon";
import WIFIOffIcon from "@components/icons/WIFIOffIcon";
import ZapIcon from "@components/icons/ZapIcon";

const BenefitSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <ZapIcon className="text-yellow-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">PWA Benefits</h2>
        </div>

        <div className="grid gap-4">
          <div className="bg-linear-to-r from-blue-900 to-blue-800 border border-blue-500 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <SmartPhoneIcon
                className="text-blue-400 shrink-0"
                width={32}
                height={32}
              />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Native-Like Experience
                </h3>
                <p className="text-gray-300">
                  Full-screen mode, splash screens, and smooth animations make
                  your web app feel like a native application.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-purple-900 to-purple-800 border border-purple-500 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <ZapIcon
                className="text-purple-400 shrink-0"
                width={32}
                height={32}
              />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Improved Performance
                </h3>
                <p className="text-gray-300">
                  Service workers cache assets for instant loading, reducing
                  bandwidth usage and improving perceived performance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-green-900 to-green-800 border border-green-500 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <WIFIOffIcon
                className="text-green-400 shrink-0"
                width={32}
                height={32}
              />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Offline Functionality
                </h3>
                <p className="text-gray-300">
                  Users can continue using your app even without an internet
                  connection, with cached content and offline pages.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-orange-900 to-orange-800 border border-orange-500 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <BellIcon
                className="text-orange-400 shrink-0"
                width={32}
                height={32}
              />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Re-engagement
                </h3>
                <p className="text-gray-300">
                  Push notifications keep users informed and engaged, even when
                  they're not actively using your app.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-pink-900 to-pink-800 border border-pink-500 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <DownloadIcon
                className="text-pink-400 shrink-0"
                width={32}
                height={32}
              />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No App Store Required
                </h3>
                <p className="text-gray-300">
                  Users can install directly from the browser without going
                  through app stores, reducing friction and update delays.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-indigo-900 to-indigo-800 border border-indigo-500 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <ShieldIcon
                className="text-indigo-400 shrink-0"
                width={32}
                height={32}
              />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Security
                </h3>
                <p className="text-gray-300">
                  PWAs require HTTPS, ensuring secure data transmission and
                  protecting users from malicious attacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitSection;
