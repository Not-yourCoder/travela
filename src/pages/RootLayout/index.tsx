import TravelFooter from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


const RootLayout = () => {
    return (
        <>
            <div className="min-h-screen no-scrollbar">
                <Header />
                {/* Main content area where child routes will render */}
                <main className="h-full">
                    <Outlet />
                </main>
                <TravelFooter/>
            </div>

            <TanStackRouterDevtools />
        </>
    )
}

export default RootLayout