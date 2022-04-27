import { FC, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Pendiente: Voluptate ullamco consequat commodo aliquip laboris eu eiusmod commodo eiusmod cillum nostrud reprehenderit aute ad.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Progreso: Id irure ad proident cillum magna commodo in laboris consectetur ex tempor ullamco.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        "Completadas: VIncididunt aute magna occaecat ullamco commodo veniam fugiat amet quis nulla.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: "pending",
      createdAt: Date.now(),
    };
    dispatch({ type: "[Entry] - Add entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] - Entry-updated", payload: entry });
  };
  return (
    <EntriesContext.Provider
      value={{
        ...state,

        addNewEntry,
        updateEntry,
      }}>
      {children}
    </EntriesContext.Provider>
  );
};
