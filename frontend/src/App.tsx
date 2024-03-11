import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./components/Search";
import PokemonCard from "./components/Card";
import { Pokemon } from "./interfaces/interfaces";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchPokemon, setSearchPokemon] = useState(null);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  console.log({ searchPokemon });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemon(pokemon);
        setIsLoading(false);
      })
      .catch((err) => {
        setSearchPokemon(null);
      });
  }, [searchPokemon]);

  function renderComponents() {
    if (!searchPokemon) return <h1>Sin resultados</h1>;
    else if (isLoading) return <h1>Cargando...</h1>;
    else return <PokemonCard pokemon={pokemon} />;
  }

  return (
    <Container style={{ marginTop: "25px" }}>
      <Row>
        <Col md={{ span: 5, offset: 3 }}>
          <img
            style={{ marginBottom: "15px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            width="100%"
            alt="pokemon_logo"
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SearchBar setSearch={setSearchPokemon} />
        </Col>
      </Row>
      <Row style={{ marginTop: "25px" }}>
        <Col md={{ span: 6, offset: 4 }}>{renderComponents()}</Col>
      </Row>
    </Container>
  );
}

export default App;
