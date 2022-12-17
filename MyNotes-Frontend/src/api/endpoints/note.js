import { REQ_TYPES } from "../api";
const BaseUrl = "note";

export const getNotesEndPoint = {
  type: REQ_TYPES.GET,
  endpoint: BaseUrl + "/getNotes",
};

export const getNoteEndPoint = (title) => ({
  type: REQ_TYPES.GET,
  endpoint: BaseUrl + `/getNote/${title}`,
});

export const postNoteEndPoint = (note) => ({
  type: REQ_TYPES.POST,
  endpoint: BaseUrl + `/saveNote`,
  payload: note,
});

export const putNoteEndPoint = (note) => ({
  type: REQ_TYPES.PUT,
  endpoint: BaseUrl + `/saveNote/${note.id}`,
  payload: note,
});

export const deleteNoteEndPoint = (note) => ({
  type: REQ_TYPES.POST,
  endpoint: BaseUrl + `/deleteNote`,
  payload: note,
});
