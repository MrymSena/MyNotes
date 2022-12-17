package com.mynotes.notes.controller;

import java.util.List;

/**
 * @author msena
 * 6 Haz 2022
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mynotes.notes.model.Note;
import com.mynotes.notes.param.NoteDto;
import com.mynotes.notes.param.NoteIdDto;
import com.mynotes.notes.service.NoteService;;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("note")
public class NoteController {
	
	@Autowired
	private NoteService noteService;

	@PostMapping("/saveNote")
	public Note saveNote(@RequestBody NoteDto noteDto) {
		return noteService.saveNote(noteDto);
	}
	
	@GetMapping("/getNotes")
	public List<Note> getNoteList(){
		return noteService.getAllNoteList();
	}
	
	@PostMapping("/deleteNote")
	public void deleteNote(@RequestBody NoteIdDto noteIdDto){
		 noteService.deleteNote(noteIdDto.getNoteId());
	}
	 
}
