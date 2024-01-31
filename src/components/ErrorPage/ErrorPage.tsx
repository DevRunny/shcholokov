import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import styles from "./ErrorPage.module.css";
import { Routes } from "../../router/router";

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      // ...
    } else if (error.status === 404) {
      // ...
    }

    return (
      <div id="error-page" className={styles.errorPage}>
        <h1>УПС!</h1>
        <p>Извините, произошла непредвиденная ошибка.</p>
        <p>
          <i>{error.statusText || error.data?.message}</i>
        </p>

        <div
          className={styles.goBackButton}
          onClick={() => {
            navigate(Routes.MAIN);
          }}
        >
          ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>УПС! Неожиданная ошибка</h1>
        <p>Что-то пошло не так</p>
        <p>
          <i>{error.message}</i>
        </p>
        <div
          className={styles.goBackButton}
          onClick={() => {
            navigate(Routes.MAIN);
          }}
        >
          ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
