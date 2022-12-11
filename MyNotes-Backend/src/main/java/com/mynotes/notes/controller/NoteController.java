package com.mynotes.notes.controller;

import java.util.List;

/**
 * @author msena
 * 6 Haz 2022
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mynotes.notes.model.Note;
import com.mynotes.notes.param.NoteDto;
import com.mynotes.notes.service.NoteService;;

	
@RestController
//@RequestMapping("myNote")
public class NoteController {
	
	@Autowired
	private NoteService noteService;

	@PostMapping("/saveNote")
	public Note saveNote(@RequestBody NoteDto noteDto) {
		return noteService.saveNote(noteDto);
	}
	
	@GetMapping("/getNote")
	public List<Note> getNoteList(){
		return noteService.getAllNoteList();
	}
	
	@GetMapping("/sampleFilter")
	public List<Note> getNoteListFromFilter(){
		return noteService.getAllNoteList();
	}
}
