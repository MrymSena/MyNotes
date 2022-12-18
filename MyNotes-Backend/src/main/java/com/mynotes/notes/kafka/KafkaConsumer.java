/**
 * @author msena
 * 18 Ara 2022
 */
package com.mynotes.notes.kafka;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {

	private static final Logger  LOGGER = LoggerFactory.getLogger(KafkaConsumer.class);
	
	@KafkaListener(topics="notes", groupId="myGroup")
	public void consume(String message) {
		LOGGER.info(String.format("Message received-> %s", message));
	}
}
