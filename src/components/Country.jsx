import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Country = ({ allCountries }) => {
  console.log(allCountries);
  return (
    <div>
      {allCountries !== undefined && allCountries.length !== 0 ? (
        allCountries.map((country, index) => (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Img
              variant="top"
              src={country.flags.svg}
              alt={country.flags.alt}
            />
            <Card.Body>
              <Card.Title>{country.name.common}</Card.Title>
              <Card.Text>
                Capital city {country.capital}. Official name:{" "}
                {country.name.official} and is in {country.region}
              </Card.Text>

              <Button variant="primary" href={country.maps.googleMaps}>
                Daugiau informacijos
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1>nerasta</h1>
      )}
    </div>
  );
};

export default Country;
