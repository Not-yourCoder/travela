import { FilterSidebar } from '@/components/Common/Filters/SearchResultsFilter';
import { SearchHeader } from './SearchHeader';
import { SearchListing } from './SearchListing';
import { PaginationDemo } from '@/components/Common/Pagination';


// Main App Component
const hotelsDataearchApp = () => {
    return (
        <div className="bg-gray-50 mt-22">
            <SearchHeader />
            <div className="flex max-w-7xl mx-auto">
                <FilterSidebar />
                <SearchListing />
            </div>
            <PaginationDemo className = "my-10"/>
        </div>
    );
};

export default hotelsDataearchApp;