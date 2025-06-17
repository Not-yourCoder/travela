/* eslint-disable @typescript-eslint/no-explicit-any */
export const FooterLinks = ({ links }: any) => (
    <ul className="space-y-3">
        {links.map((link: Record<any, any>, index: number) => (
            <li key={index}>
                <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                    {link.text}
                </a>
            </li>
        ))}
    </ul>
);