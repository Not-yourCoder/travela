export const FooterLinks = ({ links }) => (
    <ul className="space-y-3">
        {links.map((link, index) => (
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