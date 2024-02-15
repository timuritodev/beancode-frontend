import "./Search.css";
import { useAppSelector } from "../../services/typeHooks";
import { useState, useEffect } from "react";
import { SearchCardList } from "../SearchCard/SearchCardList";

const Search = ({
  isOpenSearch,
  values,
  isClose,
}: {
  isOpenSearch: boolean;
  values: string;
  isClose: () => void;
}) => {
  const cards = useAppSelector((state) => state.products.products);
  const [isFiltredCards, setIsFiltredCards] = useState(false);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(values.toLowerCase())
  );

  useEffect(() => {
    if (filteredCards?.length === 0) {
      setIsFiltredCards(true);
    } else {
      setIsFiltredCards(false);
    }
  }, [filteredCards?.length, values]);

  return (
    <div className={`search ${isOpenSearch && "search_open"}`}>
      <div className="search__cards" id="search__cards">
        {!isFiltredCards ? (
          <SearchCardList data={filteredCards} isClose={isClose} />
        ) : (
          <p className="search__card-none">
            По вашему запросу ничего не найдено
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
