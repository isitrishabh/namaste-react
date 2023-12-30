import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import ShimmerComponent from './ShimmerComponent';

const BodyComponent = () => {
  const [list, setList] = useState([]);
  const [templist, setTempList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKT'
    );
    const json = await data.json();
    console.log(json);
    setList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTempList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return templist.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              setTempList(
                list.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn-filter"
          onClick={() => {
            const filter_list = list.filter(
              (restaurant) => restaurant.info.avgRating >= 4
            );
            setTempList(filter_list);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {templist.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
