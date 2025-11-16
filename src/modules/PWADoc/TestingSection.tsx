import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import MonitorIcon from "@components/icons/MonitorIcon";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const TestingSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <MonitorIcon className="text-blue-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Testing Your PWA</h2>
        </div>

        <div className="bg-linear-to-r from-blue-900 to-indigo-900 p-6 rounded-lg border border-blue-500">
          <p className="text-gray-200">
            Test your PWA thoroughly before deployment to ensure all features
            work correctly.
          </p>
        </div>

        <CollapsibleSection title="Chrome DevTools Audit" id="lighthouse">
          <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-4">
            <li>
              Build your app:{" "}
              <code className="bg-gray-900 px-2 py-1 rounded">
                npm run build && npm start
              </code>
            </li>
            <li>Open Chrome DevTools (F12)</li>
            <li>
              Go to <strong>Lighthouse</strong> tab
            </li>
            <li>
              Select <strong>Progressive Web App</strong> category
            </li>
            <li>
              Click <strong>Analyze page load</strong>
            </li>
          </ol>

          <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-4">
            <h4 className="font-semibold text-green-400 mb-2">
              Aim for 90+ Score
            </h4>
            <p className="text-gray-300 text-sm">
              A good PWA should score 90 or above on Lighthouse PWA audit
            </p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Test Installation" id="test-install">
          <div className="space-y-4">
            <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">
                Desktop (Chrome)
              </h4>
              <ol className="space-y-1 text-gray-300 text-sm list-decimal list-inside">
                <li>Visit your app in Chrome</li>
                <li>Look for install icon in address bar</li>
                <li>Click and follow prompts</li>
                <li>Verify app opens in standalone window</li>
              </ol>
            </div>

            <div className="bg-purple-900 bg-opacity-30 border border-purple-500 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">Android</h4>
              <ol className="space-y-1 text-gray-300 text-sm list-decimal list-inside">
                <li>Visit your app in Chrome</li>
                <li>Tap browser menu (3 dots)</li>
                <li>Select "Add to Home screen"</li>
                <li>Check home screen for app icon</li>
              </ol>
            </div>

            <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">
                iOS (Safari)
              </h4>
              <ol className="space-y-1 text-gray-300 text-sm list-decimal list-inside">
                <li>Visit your app in Safari</li>
                <li>Tap Share button</li>
                <li>Select "Add to Home Screen"</li>
                <li>Customize name and tap Add</li>
              </ol>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection
          title="Test Offline Functionality"
          id="test-offline"
        >
          <ol className="space-y-3 text-gray-300 list-decimal list-inside">
            <li>Open your PWA</li>
            <li>
              Open DevTools → <strong>Network</strong> tab
            </li>
            <li>
              Check <strong>Offline</strong> checkbox
            </li>
            <li>Navigate through your app</li>
            <li>Verify cached pages load correctly</li>
            <li>Check offline fallback page works</li>
          </ol>
        </CollapsibleSection>

        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-yellow-400">
            Testing Checklist
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <BadgeCheckIcon
                  width={16}
                  height={16}
                  className="text-green-400"
                />
                <span className="text-gray-300">
                  Manifest file loads correctly
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <BadgeCheckIcon
                  width={16}
                  height={16}
                  className="text-green-400"
                />
                <span className="text-gray-300">Service worker registers</span>
              </div>
              <div className="flex items-center space-x-2">
                <BadgeCheckIcon
                  width={16}
                  height={16}
                  className="text-green-400"
                />
                <span className="text-gray-300">App is installable</span>
              </div>
              <div className="flex items-center space-x-2">
                <BadgeCheckIcon
                  width={16}
                  height={16}
                  className="text-green-400"
                />
                <span className="text-gray-300">Icons display correctly</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <BadgeCheckIcon
                  width={16}
                  height={16}
                  className="text-green-400"
                />
                <span className="text-gray-300">Offline mode works</span>
              </div>
              <div className="flex items-center space-x-2">
                <BadgeCheckIcon
                  width={16}
                  height={16}
                  className="text-green-400"
                />
                <span className="text-gray-300">Splash screen appears</span>
              </div>
              <div className="flex items-center space-x-2">
                <BadgeCheckIcon
                  width={16}
                  height={16}
                  className="text-green-400"
                />
                <span className="text-gray-300">Theme color applied</span>
              </div>
              <div className="flex items-center space-x-2">
                <BadgeCheckIcon
                  width={16}
                  height={16}
                  className="text-green-400"
                />
                <span className="text-gray-300">Notifications work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestingSection;
