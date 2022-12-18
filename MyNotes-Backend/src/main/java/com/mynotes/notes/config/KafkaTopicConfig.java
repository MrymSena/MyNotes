/**
 * @author msena
 * 18 Ara 2022
 */
package com.mynotes.notes.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class KafkaTopicConfig {

	@Bean
	public NewTopic notesTopic() {
		return TopicBuilder.name("notes").build(); //using default partition
	}
}
