import { useResponsive } from "@/hooks/useResponsive"
import MenuDrawer from "../NavigationMenu/MenuDrawer"
import NavigationMenu from "../NavigationMenu/NavigationMenu"
import ProfileBadge from "../Profile/ProfileBadge"
import { useIsScrolling } from "@/hooks/useIsScrolling"
import { Dropdown } from "../Common/DropDown/DropDown"

type Props = {}

const Header = (props: Props) => {
    const { isMobile, isTablet, isDesktop } = useResponsive()
    const isScrolling = useIsScrolling()
    return (
        <div className={` fixed w-full flex items-center justify-between p-6 ${isScrolling ? "bg-slate-600 text-white" : "bg-transparent shadow-md"} duration-300 ease-in-out`}>
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