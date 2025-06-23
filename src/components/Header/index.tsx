import { useResponsive } from "@/hooks/useResponsive"
import MenuDrawer from "../NavigationMenu/MenuDrawer"
import ProfileBadge from "../Profile/ProfileBadge"
import { Dropdown } from "../Common/DropDown/DropDown"
import useScrollWatcher from "@/hooks/useScrollWatcher"
import { NavigationMenuDemo } from "../NavigationMenu/NavigationMenu"
import { useRouter } from "@tanstack/react-router"


const Header = () => {
    const { isMobile, isTablet, isDesktop } = useResponsive()
    const router = useRouter()

    const currentPath = router.state.location.pathname
    console.log(currentPath)

    const getHeaderBackground = () => {
        if (hasScrolled) return "bg-blue-900 shadow-md"
        if (currentPath === "/search_results") return "bg-blue-900"
        return "bg-transparent"
    }

    const hasScrolled = useScrollWatcher()
    return (
        <div className={` fixed top-0 w-full flex items-center justify-between z-50 p-6 ${getHeaderBackground()} text-white duration-300 ease-in-out`}>
            <div className="flex">
                <div className="logo mr-10">
                    Logo
                </div>
                {isDesktop &&
                    <NavigationMenuDemo />
                }
            </div>
            <div className="flex items-center justify-around gap-4">
                <Dropdown>
                    <ProfileBadge />
                </Dropdown>
                {(isMobile || isTablet) && <MenuDrawer />}
            </div>
        </div>
    )
}

export default Header