/**
 * @author msena
 * 6 Haz 2022
 */
package com.mynotes.notes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mynotes.notes.model.Note;



/**
 * @author msena
 *
 */

public interface NoteRepository extends JpaRepository<Note, Integer> {



	

}


