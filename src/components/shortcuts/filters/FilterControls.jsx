import { useTranslation } from "react-i18next";
import { ArrowUpDown, Filter, X } from "lucide-react";
import PropTypes from "prop-types";

const FilterControls = ({
  sortBy,
  onSortChange,
  showFilters,
  onToggleFilters,
  hasActiveFilters,
  onClearFilters,
}) => {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
      <div className="d-flex gap-2">
        {/* Sort Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center gap-2"
            type="button"
            id="sortDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              borderColor: "var(--bs-border-color)",
              color: "var(--bs-body-color)",
            }}
          >
            <ArrowUpDown size={16} />
            {t(`sort.${sortBy}`)}
          </button>
          <ul className="dropdown-menu" aria-labelledby="sortDropdown">
            <li>
              <button
                className="dropdown-item"
                onClick={() => onSortChange("category")}
              >
                {t("sort.category")}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => onSortChange("name")}
              >
                {t("sort.name")}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => onSortChange("relevance")}
              >
                {t("sort.relevance")}
              </button>
            </li>
          </ul>
        </div>

        {/* Toggle Filters Button */}
        <button
          className={`btn ${
            showFilters ? "btn-warning" : "btn-outline-warning"
          } d-flex align-items-center gap-2`}
          onClick={onToggleFilters}
        >
          <Filter size={16} />
          {t("common.filters")}
          {hasActiveFilters && (
            <span className="badge text-bg-danger rounded-pill">1</span>
          )}
        </button>
      </div>

      {/* Clear Filters Button */}
      {hasActiveFilters && (
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={onClearFilters}
        >
          <X size={16} className="me-1" />
          {t("common.clearFilters")}
        </button>
      )}
    </div>
  );
};

FilterControls.propTypes = {
  sortBy: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
  showFilters: PropTypes.bool.isRequired,
  onToggleFilters: PropTypes.func.isRequired,
  hasActiveFilters: PropTypes.bool.isRequired,
  onClearFilters: PropTypes.func.isRequired,
};

export default FilterControls;
