import { navigationMenu } from '@/constants'
import { Link } from '@tanstack/react-router'
import { Dropdown } from '../Common/DropDown/DropDown'


const NavigationMenu = () => {
    return (
        <div className='flex gap-10'>
            {navigationMenu.map((navItem) => (
                <div className=''>
                    {navItem.isDropdown ? (
                        <Dropdown label={navItem.label} />
                    ) : (

                        <Link to={navItem.path}>
                            {navItem.label}
                        </Link>
                    )
                    }
                </div>
            ))
            }
        </div >
    )
}

export default NavigationMenu