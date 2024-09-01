package com.mergentech.internship_project.enums;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

import java.io.IOException;

public class DepartmanlarEnumDeserializer extends JsonDeserializer<DepartmanlarEnum> {

    @Override
    public DepartmanlarEnum deserialize(JsonParser p, DeserializationContext deserializationContext) throws IOException, JacksonException {
        JsonNode node = p.getCodec().readTree(p);
        int id = node.get("id").asInt();
        return DepartmanlarEnum.fromId(id);
    }
}
