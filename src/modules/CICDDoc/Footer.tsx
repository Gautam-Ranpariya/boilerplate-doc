const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 border-t border-gray-800 mt-12 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-2">
            <strong className="text-blue-400">Need Help?</strong>
          </p>
          <p className="text-gray-500 text-sm">
            Check GitHub Actions logs or Vercel deployment logs for detailed
            error messages
          </p>
          <p className="text-gray-500 text-sm mt-3">
            Created with ❤️ for Next.js TypeScript Boilerplate
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
