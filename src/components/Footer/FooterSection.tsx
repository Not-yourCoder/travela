export const FooterSection = ({ title, children }) => (
    <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
        {children}
    </div>
  );