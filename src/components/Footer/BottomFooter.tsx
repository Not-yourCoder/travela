/* eslint-disable @typescript-eslint/no-explicit-any */
export const BottomFooter = ({ data }: any) => (
    <div className="border-t border-gray-200 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
                <p className="text-gray-600">{data.copyright}</p>
                <div className="flex gap-4">
                    {data.legalLinks.map((link: Record<any, any>, index: number) => (
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

            <div className="flex items-center gap-4">
                <select className="text-gray-600 bg-transparent">
                    <option>{data.language}</option>
                </select>
                <span className="text-gray-600">$</span>
                <select className="text-gray-600 bg-transparent">
                    <option>{data.currency}</option>
                </select>

                <div className="flex gap-2 ml-4">
                    {data.socialLinks.map((social: Record<any, any>, index: number) => (
                        <a
                            key={index}
                            href={social.href}
                            aria-label={social.label}
                            className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-blue-100 transition-colors"
                        >
                            <social.icon className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
