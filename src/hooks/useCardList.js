import React from "react";

export function useCardList() {
    const [cardsCountInLine, setCardsCountInLine] = React.useState(3);
    const [cardsLineCount, setCardsLineCount] = React.useState(4);

    function CardList() {
        const userWidth = window.innerWidth;
        if (userWidth >= 1241) {
            setCardsCountInLine(3);
            setCardsLineCount(4);
        } else if (userWidth >= 768 && userWidth <= 1240) {
            setCardsCountInLine(2);
            setCardsLineCount(4);
        } else {
            setCardsCountInLine(1);
            setCardsLineCount(5);
        }
    }

    return { cardsCountInLine, cardsLineCount, setCardsLineCount, CardList };
}