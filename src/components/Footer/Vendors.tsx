/* eslint-disable @typescript-eslint/no-explicit-any */
export const VendorLinks = ({ links }: any) => (
    <div className="bg-gray-100 py-4 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-6">
                {links.map((link: Record<any, any>, index: number) => (
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