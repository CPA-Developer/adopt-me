import { useState } from "react";


const SearchParams = () => {

   
    // const locationTuple =useState("Seattle, WA");
    // const location = locationTuple[0];
    // const setLocation = locationTuple[1];
    const [location, setLocation]=useState("Seattle, WA");
    function updateLocation(e){
        setLocation(e.target.value);
    }
    //const location = "Seattle, WA";
    return (
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location
            <input id="location" 
            // onChange={e => setLocation(e.target.value)}
            onChange={updateLocation}
             value={location} placeholder="Location" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  };
  
  export default SearchParams;