import React from "react";
import PeoplePage from "./PeoplePage";
import { useParams } from "react-router-dom";
import { Category, Result } from "../services/api";
import { isPerson, Person } from "../models/Person";

export default function CategoryPage({ results }: { results: Result[] }) {
  const { category } = useParams<{ category: Category }>();

  const peopleResult = results.find(({ category }) => category === "people");
  const peopleEntities = peopleResult?.entities;
  const people: Person[] = peopleEntities?.filter(isPerson) || [];

  return (
    <div>
      <h1>{category}</h1>
      {category === "people" ? (
        <PeoplePage people={people} />
      ) : (
        <p>Category page for {category} is not implemented yet.</p>
      )}
    </div>
  );
}
