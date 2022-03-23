import Pet from "./Pet.js";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>NO pets found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            image={pet.images}
            location={`${pet.city},${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
