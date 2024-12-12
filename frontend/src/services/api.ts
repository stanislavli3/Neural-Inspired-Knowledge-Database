import axios from "axios";

// Define the base URL for your Django API
const API_BASE_URL = "http://localhost:8000/api";

// Define interfaces for the Note
export interface Note {
  id?: string; // MongoDB ID is optional when creating a new note
  title: string;
  content: string;
}

// Fetch all notes
export const fetchNotes = async (): Promise<Note[]> => {
  const response = await axios.get<{ notes: Note[] }>(`${API_BASE_URL}/notes/`);
  return response.data.notes;
};

// Create a new note
export const createNote = async (note: Omit<Note, "id">): Promise<Note> => {
  const response = await axios.post<{
    message: string;
    note_id: string;
  }>(`${API_BASE_URL}/notes/`, note);

  // Return the new note with its assigned ID
  return { ...note, id: response.data.note_id };
};
