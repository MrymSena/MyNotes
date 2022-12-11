/**
 * @author msena
 * 6 Haz 2022
 */
package com.mynotes.notes.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="notes")
@Getter
@Setter
@AllArgsConstructor
public class Note {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer noteId;
	private Integer userId;
	private String title;
	private String note;
	
	public Note() {
		
	}
}
