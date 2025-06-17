/* eslint-disable @typescript-eslint/no-explicit-any */
export const FooterSection = ({ title, children }: any) => (
    <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
        {children}
    </div>
  );