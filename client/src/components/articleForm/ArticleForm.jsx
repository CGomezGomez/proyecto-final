import { Button, FormWrapper, InputField, StyledH1, TextArea } from "./styles";

const ArticleForm = ({title , setTitle , content , setContent , onSubmit}) => {

  return (
    <FormWrapper onSubmit={onSubmit}>
      <StyledH1>Crea tu artículo</StyledH1>
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