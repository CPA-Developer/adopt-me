import { useState, useEffect } from "react";
import Pet from "./Pet.js"

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // const locationTuple =useState("Seattle, WA");
  // const location = locationTuple[0];
  // const setLocation = locationTuple[1];
  const [location, setLocation] = useState("");
  function updateLocation(e) {
    setLocation(e.target.value);
  }
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
    const breeds = [];

    useEffect(()=>{
        requestPets();
    }, []);   //eslint-disable-line react-hooks/exhaustive-deps

//      useEffect(()=>{
//   const timer= setTimeout(() =>alert("hi"),300);
//   return ()=> clearTimeout(timer);
//      },[animal]);
    async function requestPets(){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
       console.log(json);
        setPets(json.pets);
    }

  //const location = "Seattle, WA";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            // onChange={e => setLocation(e.target.value)}
            onChange={updateLocation}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {
          pets.map(pet =>(
              <Pet name={pet.name}
              animal = {pet.animal}
              breed ={pet.breed}
              key ={pet.id}/>
          ))
      }
    </div>
  );
};

export default SearchParams;