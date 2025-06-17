export const MobileApps = ({ data }) => (
    <div className="space-y-3">
        {data.apps.map((app, index) => (
            <a
                key={index}
                href={app.href}
                className="flex items-center p-2 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors group"
            >
                <app.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 mr-3" />
                <span className="text-sm text-gray-600 group-hover:text-blue-600">
                    {app.text}
                </span>
            </a>
        ))}
    </div>
  );