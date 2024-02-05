import { useState } from "react";

export const IngredientFilter = ({applyFilters}) => {
    const [filters, setFilters] = useState(['']);

    const handleInputChange = (index, value) => {
        const newFilters = [...filters];
        newFilters[index] = value;
        setFilters(newFilters);
    };

    const handleAddFilter = () => {
        setFilters([...filters, '']);
    };

    const handleRemoveFilter = (index) => {
        const newFilters = [...filters];
        newFilters.splice(index, 1);
        setFilters(newFilters);
    };

    const handleApplyFilters = () => {
        const nonEmptyFilters = filters.filter((filter) => filter !== '');
        applyFilters(nonEmptyFilters);
    };

    return (
        <>
            <div className="filter-container">
                <form>
                    {filters.map((filter, index) => (
                        <div key={index} className="filter-row">
                            <label htmlFor={`filter-${index}`}>Ingredient:</label>
                            <input
                                type="text"
                                id={`filter-${index}`}
                                value={filter}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                            />
                            {index > 0 && (
                                <button type="button" onClick={() => handleRemoveFilter(index)}>
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={handleAddFilter}>
                        Add ingredient
                    </button>
                    <button className='filterButton' id="apply-filters" type="button" onClick={handleApplyFilters}>
                        Apply Filters
                    </button>
                </form>
            </div>
        </>
    );
};