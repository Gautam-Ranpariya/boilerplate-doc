import ImageIcon from "@components/icons/ImageIcon";
import TriangleAlertIcon from "@components/icons/TriangleAlertIcon";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const IconSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <ImageIcon className="text-pink-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Icons & Assets</h2>
        </div>

        <div className="bg-linear-to-r from-pink-900 to-rose-900 p-6 rounded-lg border border-pink-500">
          <p className="text-gray-200">
            PWAs require icons in multiple sizes for different devices and
            contexts. Here's what you need to create.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
          <table className="w-full">
            <thead className="bg-linear-to-r from-blue-600 to-purple-600">
              <tr>
                <th className="px-6 py-3 text-left text-white font-semibold">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-white font-semibold">
                  Purpose
                </th>
                <th className="px-6 py-3 text-left text-white font-semibold">
                  Location
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded">72x72</code>
                </td>
                <td className="px-6 py-4 text-gray-300">iOS small</td>
                <td className="px-6 py-4 text-gray-300">/public/icons/</td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded">96x96</code>
                </td>
                <td className="px-6 py-4 text-gray-300">Android small</td>
                <td className="px-6 py-4 text-gray-300">/public/icons/</td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded">128x128</code>
                </td>
                <td className="px-6 py-4 text-gray-300">Chrome Web Store</td>
                <td className="px-6 py-4 text-gray-300">/public/icons/</td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded">144x144</code>
                </td>
                <td className="px-6 py-4 text-gray-300">Windows tiles</td>
                <td className="px-6 py-4 text-gray-300">/public/icons/</td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded">152x152</code>
                </td>
                <td className="px-6 py-4 text-gray-300">iOS large</td>
                <td className="px-6 py-4 text-gray-300">/public/icons/</td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded">192x192</code>
                </td>
                <td className="px-6 py-4 text-gray-300">Android standard</td>
                <td className="px-6 py-4 text-gray-300">/public/icons/</td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded">384x384</code>
                </td>
                <td className="px-6 py-4 text-gray-300">Android large</td>
                <td className="px-6 py-4 text-gray-300">/public/icons/</td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded">512x512</code>
                </td>
                <td className="px-6 py-4 text-gray-300">Splash screens</td>
                <td className="px-6 py-4 text-gray-300">/public/icons/</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CollapsibleSection title="Generate Icons Online" id="generate-icons">
          <p className="text-gray-300 mb-4">
            Use these tools to generate all required icon sizes from a single
            image:
          </p>
          <div className="space-y-3">
            <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">
                🎨 PWA Icon Generator
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                https://www.pwabuilder.com/imageGenerator
              </p>
              <p className="text-gray-400 text-sm">
                Upload one image and download all sizes
              </p>
            </div>
            <div className="bg-purple-900 bg-opacity-30 border border-purple-500 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">
                🖼️ Favicon Generator
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                https://realfavicongenerator.net
              </p>
              <p className="text-gray-400 text-sm">
                Comprehensive favicon and icon generator
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <div className="bg-yellow-900 bg-opacity-30 border border-yellow-500 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <TriangleAlertIcon
              className="text-yellow-400 shrink-0 mt-1"
              width={24}
              height={24}
            />
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">
                Best Practices
              </h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Use PNG format with transparency</li>
                <li>
                  • Keep design simple - icons appear small on home screens
                </li>
                <li>• Test icons on different background colors</li>
                <li>• Use maskable icons for Android adaptive icons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconSection;
