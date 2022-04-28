import { FC, useEffect, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
// import { v4 as uuidv4 } from "uuid";
import { entriesApi } from "../../apis";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    // const newEntry: Entry = {
    //   _id: uuidv4(),
    //   description,
    //   status: "pending",
    //   createdAt: Date.now(),
    // };
    const { data } = await entriesApi.post<Entry>("/entries", { description });

    dispatch({ type: "[Entry] - Add entry", payload: data });
  };

  const updateEntry = async (entry: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, {
        description: entry.description,
        status: entry.status,
      });

      dispatch({ type: "[Entry] - Entry-updated", payload: data });
    } catch (error) {
      console.log(
        "🚀 ~ file: EntriesProvider.tsx ~ line 39 ~ updateEntry ~ error",
        error
      );
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "[Entry] - Refresh-data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

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
