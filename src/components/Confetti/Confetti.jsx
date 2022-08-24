import React, { useCallback, useRef, useEffect, useState } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

import { FaUserCircle } from 'react-icons/fa';
import { RiCake2Fill } from 'react-icons/ri';
import './Confetti.css';
import { Modal } from '../Modal/Modal';

const canvasStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
};

const birthdays = [
    { surName: 'Бақытбекұлы', name: 'Рустем', patronymic: '', year: '1203' },
    { surName: 'Олжасов', name: 'Айдар', patronymic: 'Оразұлы', year: '1203' },
    {
        surName: 'Айдаров',
        surName: 'Айбол',
        patronymic: 'Асланұлы',
        year: '1203',
    },
    { surName: 'Қожанов', name: 'Ғазиз', patronymic: 'Қожанұлы', year: '1203' },
    {
        surName: 'Асылханов',
        name: 'Даурен',
        patronymic: 'Алиұлы',
        year: '1203',
    },
];

export function Realistic() {
    const [modalActive, setModalActive] = useState(false);
    const refAnimationInstance = useRef(null);

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current &&
            refAnimationInstance.current({
                ...opts,
                origin: { y: 0.7 },
                particleCount: Math.floor(200 * particleRatio),
            });
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55,
        });

        makeShot(0.2, {
            spread: 60,
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }, [makeShot]);

    const openClick = () => {
        fire();
        setModalActive(!modalActive);
    };

    return (
        <>
            <div onClick={openClick} className="modal__toggle__btn">
                <RiCake2Fill className="birthday_cake" size={40} />
            </div>
            <ReactCanvasConfetti
                refConfetti={getInstance}
                style={canvasStyles}
            />
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="modal__item_title">
                    <h5>
                        Сегодня день рождения <br /> у следующих сотрудников:
                    </h5>
                    <p className="date-time">
                        {new Date().toISOString().slice(0, 10)}
                    </p>
                </div>
                {birthdays.map((item, index) => (
                    <div key={index} className="modal__item">
                        <FaUserCircle className="modal__item__icon" />
                        <div className="modal__item__text">
                            <span>{item?.surName}</span>
                            &nbsp;
                            <span>{item?.name}</span>
                            &nbsp;
                            <span>{item?.patronymic}</span>
                        </div>
                    </div>
                ))}
                <button
                    onClick={() => setModalActive(false)}
                    className="modal__close_btn"
                >
                    закрыть
                </button>
            </Modal>
        </>
    );
}
