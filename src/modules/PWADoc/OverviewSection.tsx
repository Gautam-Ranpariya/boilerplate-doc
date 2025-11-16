import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import CodeIcon from "@components/icons/CodeIcon";
import GlobeIcon from "@components/icons/GlobeIcon";
import SmartPhoneIcon from "@components/icons/SmartPhoneIcon";
import CodeBlock from "@components/ui/CodeBlock";
import Link from "next/link";

const OverviewSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <SmartPhoneIcon className="text-blue-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Overview</h2>
        </div>

        <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-400 flex items-center space-x-2">
            <CodeIcon width={24} height={24} />
            <span>Debug Commands</span>
          </h3>
          <CodeBlock
            id="debug-commands"
            code={`# Check service worker registration
chrome://serviceworker-internals

# View manifest
chrome://inspect/#service-workers

# Clear all site data
DevTools → Application → Clear Storage

# Force update service worker
DevTools → Application → Service Workers → Update

# Test different network conditions
DevTools → Network → Throttling`}
          />
        </div>

        <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-400 flex items-center space-x-2">
            <BadgeCheckIcon width={24} height={24} />
            <span>Success Indicators</span>
          </h3>
          <p className="text-gray-300 mb-3">
            Your PWA is working correctly when:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Install prompt appears on supported devices</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>App works offline with cached content</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Lighthouse PWA score is 90+</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>App opens in standalone mode when installed</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Splash screen displays on app launch</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Service worker updates automatically</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-900 bg-opacity-30 border border-purple-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-purple-400">
            Useful Resources
          </h3>
          <div className="space-y-2 text-sm">
            <Link
              href="https://web.dev/progressive-web-apps/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:underline"
            >
              <GlobeIcon width={16} height={16} />
              <span>Web.dev PWA Guide</span>
            </Link>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:underline"
            >
              <GlobeIcon width={16} height={16} />
              <span>MDN PWA Documentation</span>
            </Link>
            <Link
              href="https://github.com/shadowwalker/next-pwa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:underline"
            >
              <GlobeIcon width={16} height={16} />
              <span>next-pwa GitHub Repository</span>
            </Link>
            <Link
              href="https://www.pwabuilder.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:underline"
            >
              <GlobeIcon width={16} height={16} />
              <span>PWA Builder Tools</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewSection;
