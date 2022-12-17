/**
 * @author msena
 * 17 Ara 2022
 */
package com.mynotes.notes.param;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class NoteIdDto {
	private Integer noteId;
}
