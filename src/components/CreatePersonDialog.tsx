// src/components/CreatePersonDialog.tsx

import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { PersonDto } from "../types";
import { Person } from "../models/Person";

export default function CreatePersonDialog({
  open,
  onClose,
  onCreate,
}: {
  open: boolean;
  onClose: () => void;
  onCreate: (person: Person) => void;
}) {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    const newPersonDto: PersonDto = { name, height, mass, gender };
    const newPerson = new Person(newPersonDto);
    onCreate(newPerson);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Person</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Height"
          type="text"
          fullWidth
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Mass"
          type="text"
          fullWidth
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Gender"
          type="text"
          fullWidth
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
