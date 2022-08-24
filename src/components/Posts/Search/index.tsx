import { SearchContainer } from "./styled";

const Search = () => {
  return (
    <SearchContainer>
      <span>
        Publicações
        <p>6 publicaçções</p>
      </span>
      <input placeholder="Buscar conteúdo" />
    </SearchContainer>
  );
};

export default Search;
