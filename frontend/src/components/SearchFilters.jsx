import React, { useState, useEffect } from "react";
import { filterData, getFilterValues } from "../utils/filterData";
import styles from "../css/Component.module.css";
import Card from "./Card";

export default function SearchFilters({ properties }) {
  const [filters, setFilters] = useState(filterData);

  const [searchFilters, setSearchFilters] = useState(false);
  //   const router = useRouter();

  function searchProperties(filterValues) {}

  return (
    <div className={styles.filter}>
      {filters.map((filter) => (
        <div key={filter.queryName}>
          <div className={styles.section}>
            {/* <span>Property Type</span> */}
            <select
              defaultValue="house"
              placeholder={filter.placeholder}
              onChange={(e) =>
                searchProperties({
                  [filter.queryName]: e.target.value,
                })
              }
            >
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
      {properties.map((property) => (
        <Card property={property} key={property.id} />
      ))}
    </div>
  );
}
