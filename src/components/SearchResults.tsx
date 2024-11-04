import React from "react";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { Result } from "../services/api";

export default function SearchResults({
  results,
  onViewAll,
}: {
  results: Result[];
  onViewAll: (category: string) => void;
}) {
  return (
    <div>
      {results.map(({ category, entities }) => (
        <div key={category}>
          <h3>{category}</h3>
          <List>
            {entities.slice(0, 3).map((entity, index) => (
              <ListItem key={index}>
                <ListItemText primary={entity.displayName} />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onViewAll(category)}
          >
            View All
          </Button>
        </div>
      ))}
    </div>
  );
}
