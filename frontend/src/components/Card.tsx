import { Card, Stack, Badge, Tabs, Tab } from "react-bootstrap";
import { Pokemon } from "../interfaces/interfaces";
import LabelStats from "./LabelStats";

interface IPPokemonCard {
  pokemon: Pokemon;
}

function PokemonCard({ pokemon }: IPPokemonCard) {
  return (
    <Card className="card-container">
      <Card.Title className="card-title">{pokemon.name}</Card.Title>
      <Card.Img
        variant="top"
        src={pokemon.sprites?.other?.["official-artwork"].front_default}
      />
      <Card.Body>
        <Stack direction="horizontal" gap={2}>
          {pokemon.types.map((type) => (
            <Badge bg="secondary" key={type?.type?.name}>
              {type?.type?.name}
            </Badge>
          ))}
        </Stack>
        <Tabs className="card-tabs" defaultActiveKey="general" justify>
          <Tab eventKey="general" title="General">
            <LabelStats name="experience" value={pokemon.base_experience} />
            <LabelStats name="height" value={`${pokemon.height / 10}cm`} />
            <LabelStats name="weight" value={`${pokemon.weight / 10}kg`} />
          </Tab>
          <Tab eventKey="stats" title="Stats">
            {pokemon.stats.map((stat) => (
              <LabelStats name={stat?.stat?.name} value={stat?.base_stat} />
            ))}
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
