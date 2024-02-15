import "./SearchCard.css";
import { IProduct } from "../../types/Product.types";
import { FC } from "react";
import { SearchCard } from "./SearchCard";

interface SearchCardListProps {
  data: IProduct[];
  isClose: () => void;
}

export const SearchCardList: FC<SearchCardListProps> = ({ data, isClose }) => {
  return (
    <div className="searchcardlist">
      {data.length !== 0 &&
        data.map((item) => <SearchCard key={item.id} data={item} isClose={isClose}/>)}
    </div>
  );
};
