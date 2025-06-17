/* eslint-disable @typescript-eslint/no-explicit-any */
export const ContactInfo = ({ data } : any) => (
    <div className="space-y-4">
        <div>
            <p className="text-sm text-gray-600 mb-1">{data.phone.label}</p>
            <a
                href={`tel:${data.phone.number}`}
                className="text-blue-600 font-semibold hover:text-blue-700"
            >
                {data.phone.number}
            </a>
        </div>
        <div>
            <p className="text-sm text-gray-600 mb-1">{data.support.label}</p>
            <a
                href={`mailto:${data.support.email}`}
                className="text-blue-600 font-semibold hover:text-blue-700"
            >
                {data.support.email}
            </a>
        </div>
    </div>
  );