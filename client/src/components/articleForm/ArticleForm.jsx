import { useState } from "react";
import { Button, FormWrapper, InputField, TextArea } from "./styles";

const ArticleForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">Publicar</Button>
    </FormWrapper>
  );
};

export default ArticleForm;