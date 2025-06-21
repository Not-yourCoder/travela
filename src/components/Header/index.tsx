import { useResponsive } from "@/hooks/useResponsive"
import MenuDrawer from "../NavigationMenu/MenuDrawer"
import NavigationMenu from "../NavigationMenu/NavigationMenu"
import ProfileBadge from "../Profile/ProfileBadge"
import { Dropdown } from "../Common/DropDown/DropDown"
import useScrollWatcher from "@/hooks/useScrollWatcher"


const Header = () => {
    const { isMobile, isTablet, isDesktop } = useResponsive()
   
    const hasScrolled = useScrollWatcher()
    return (
        <div className={` fixed w-full flex items-center justify-between z-50 p-6 ${hasScrolled ? "bg-blue-900 shadow-md" : "bg-transparent"} text-white duration-300 ease-in-out`}>
            <div className="flex">
                <div className="logo mr-10">
                    Logo
                </div>
                {isDesktop &&
                    <NavigationMenu />
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