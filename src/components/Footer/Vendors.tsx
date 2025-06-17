export const VendorLinks = ({ links }) => (
    <div className="bg-gray-100 py-4 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-6">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        {link.text}
                    </a>
                ))}
            </div>
        </div>
    </div>
  );