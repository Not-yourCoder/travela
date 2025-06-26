import { type ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const InformationCard = ({ children }: Props) => {
    return (
        <div className="bg-gray-50 text-slate-800 p-4 rounded-lg shadow-sm border-gray-300/50 border-2">
            {children}
        </div>
    )
}

export default InformationCard