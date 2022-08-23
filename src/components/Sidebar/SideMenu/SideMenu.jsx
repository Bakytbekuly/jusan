import { Link } from 'react-router-dom';
import { IoRocketOutline } from 'react-icons/io';
import './SideMenu.css';
export const SideMenu = () => {
    return (
        <div className="side-menu">
            <ul>
                <Link className="side_menu_item" to="/">
                    Редактировать профиль
                </Link>
                <Link className="side_menu_item" to="/">
                    Мои заказы
                </Link>
                <Link className="side_menu_item" to="/">
                    Запуск процессов
                </Link>
                <Link className="side_menu_item" to="/">
                    История платежей
                </Link>
                <Link className="side_menu_item" to="/">
                    События
                </Link>
            </ul>
            <Link to="/" className="logOut side_menu_item">
                Выход
            </Link>
        </div>
    );
};
