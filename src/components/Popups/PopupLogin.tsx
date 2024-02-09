import { FC } from "react";
import Popup from "./Popup";

interface IChangesSavedPopup {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PopupLogin: FC<IChangesSavedPopup> = ({
  isOpened,
  setIsOpened,
}) => {
  return (
    <Popup isOpened={isOpened} setIsOpened={setIsOpened}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__x-btn"
          onClick={() => setIsOpened(false)}
        ></button>
        <h4 className="popup__title profile__title_type_saved-changes">
          Авторизация
        </h4>
        <p className="popup__text profile__text_type_saved-changes">
          Вы успешно зашли в личный аккаунт
        </p>
        <button
          className="popup__close popup__close_type_saved-changes"
          onClick={() => setIsOpened(false)}
        >
          Закрыть
        </button>
      </div>
    </Popup>
  );
};
