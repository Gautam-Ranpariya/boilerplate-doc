import ExternalLinkIcon from "@components/icons/ExternalLinkIcon";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 border-t border-gray-800 mt-12 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-2">
            <strong className="text-blue-400">Need Help?</strong>
          </p>
          <div className="flex justify-center space-x-4 mb-3">
            <Link
              href="https://vercel.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center space-x-1"
            >
              <span>Vercel Documentation</span>
              <ExternalLinkIcon width={14} height={14} />
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="https://github.com/vercel/vercel/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center space-x-1"
            >
              <span>Community Discussions</span>
              <ExternalLinkIcon width={14} height={14} />
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            Created with ❤️ for Next.js TypeScript Boilerplate
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
