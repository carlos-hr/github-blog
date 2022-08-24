import { SearchContainer } from "./styled";

interface SearchProps {
  publishs: number;
  inputValue: string;
  onChangeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ publishs, inputValue, onChangeInputValue }: SearchProps) => {
  return (
    <SearchContainer>
      <span>
        Publicações
        <p>{publishs} publicaçções</p>
      </span>
      <input
        placeholder="Buscar conteúdo"
        onChange={onChangeInputValue}
        value={inputValue}
      />
    </SearchContainer>
  );
};

export default Search;
