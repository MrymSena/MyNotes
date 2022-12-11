/**
 * @author msena
 * 6 Haz 2022
 */
package com.mynotes.notes.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mynotes.notes.model.Note;
import com.mynotes.notes.param.NoteDto;
import com.mynotes.notes.repository.NoteRepository;

@Service
public class NoteServiceImpl implements NoteService{

	@Autowired
	private NoteRepository noteRepository;

	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public Note saveNote(NoteDto noteDto) {
		Note note = modelMapper.map(noteDto, Note.class);
		return noteRepository.save(note);
	}

	@Override
	public List<Note> getAllNoteList() {
		return noteRepository.findAll();
	}
}
