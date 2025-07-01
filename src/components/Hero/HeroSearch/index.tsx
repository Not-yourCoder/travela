import DatePickerDropdown from "./DatePicker"
import LocationDropdown from "./LocationDropdown"
import GuestDropdown from "./Members"
import SearchButton from "./SearchButton"

export default function SearchBar() {
    return (
        <div className="flex flex-col gap-3 md:flex-row lg:flex-row lg:gap-4 md:bg-white lg:bg-white p-2 md:p-4 lg:p-4 rounded-md md:rounded-full lg:rounded-full w-fit shadow-lg max-w-5xl mx-auto">
            <LocationDropdown />
            <DatePickerDropdown />
            <GuestDropdown />
            <SearchButton />
        </div>
    )
}
