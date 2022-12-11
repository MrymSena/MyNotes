/**
 * @author msena
 * 12 Haz 2022
 */
package com.mynotes.notes.param;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * @author msena
 *
 */
@Data
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class NoteDto {
	private Integer noteId;
	private Integer userId;
	private String title;
	private String note;
}
