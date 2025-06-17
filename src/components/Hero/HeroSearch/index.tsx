import DatePickerDropdown from "./DatePicker"
import LocationDropdown from "./LocationDropdown"
import GuestDropdown from "./Members"
import SearchButton from "./SearchButton"

export default function SearchBar() {
    return (
        <div className="flex gap-4 bg-white p-4 rounded-full shadow-lg items-center w-fit mx-auto">
            <LocationDropdown />
            <DatePickerDropdown />
            <GuestDropdown />
            <SearchButton />
        </div>
    )
}
