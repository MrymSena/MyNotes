/**
 * @author msena
 * 6 Haz 2022
 */
package com.mynotes.notes.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mynotes.notes.model.Note;
import com.mynotes.notes.param.NoteDto;


public interface NoteService {

	Note saveNote(NoteDto noteDto);
	List<Note> getAllNoteList();
}
