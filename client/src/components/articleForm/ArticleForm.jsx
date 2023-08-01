import { Button, FormWrapper, InputField, TextArea } from "./styles";

const ArticleForm = ({title , setTitle , content , setContent , onSubmit}) => {

  return (
    <FormWrapper onSubmit={onSubmit}>
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