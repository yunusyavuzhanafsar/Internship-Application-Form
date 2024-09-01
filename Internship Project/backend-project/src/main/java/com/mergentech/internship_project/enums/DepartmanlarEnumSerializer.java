package com.mergentech.internship_project.enums;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;

public class DepartmanlarEnumSerializer extends JsonSerializer<DepartmanlarEnum> {

    @Override
    public void serialize(DepartmanlarEnum value, JsonGenerator gen, SerializerProvider serializerProvider) throws IOException {
        gen.writeStartObject();
        gen.writeNumberField("id", value.getId());
        gen.writeStringField("gorunen", value.name());
        gen.writeEndObject();
    }
}
