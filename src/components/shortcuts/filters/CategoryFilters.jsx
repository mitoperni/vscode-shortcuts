import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { getCategoryIcon } from "../../../utils/categoryIcons";

const CategoryFilters = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mb-3">
      <div className="d-flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm ${
              selectedCategory === cat ? "btn-warning" : "btn-outline-warning"
            }`}
            onClick={() => onSelectCategory(cat)}
          >
            <span className="me-1">{getCategoryIcon(cat)}</span>
            {t(`filters.${cat}`)}
          </button>
        ))}
      </div>
    </div>
  );
};

CategoryFilters.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default CategoryFilters;
