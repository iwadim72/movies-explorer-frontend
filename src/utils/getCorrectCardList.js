function changeUrl(card) {
    if (card.image.url && !card.image.url.includes('https://api.nomoreparties.co')) {
        card.image.url = 'https://api.nomoreparties.co' + card.image.url;
        card.image.formats.thumbnail.url = 'https://api.nomoreparties.co' + card.image.formats.thumbnail.url;
        return card;
    }
    return card;
}

export default function getCorrectCardList(options, fullCardList) {
    const checkBoxChecked = options.shortFilm;

    if (options.name) {
        const name = options.name.toLowerCase();
        const newList = fullCardList.filter((card) => {
            if ((card.nameRU.toLowerCase().includes(name)) || (card.nameEN.toLowerCase().includes(name))) {
                if (checkBoxChecked) {
                    const duration = card.duration;
                    if (duration <= 40) {
                        return changeUrl(card);
                    }
                } else { return changeUrl(card) }
            }
        })
        return newList
    }

    const newList = fullCardList.filter((card) => {
        if (checkBoxChecked) {
            const duration = card.duration;
            if (duration <= 40) {
                return changeUrl(card);
            }
        } else { return changeUrl(card) }
    })

    return newList
}