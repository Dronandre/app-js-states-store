export const elements = {
    filterButton: document.getElementsByClassName('filter__show'),
    filterSelect: document.getElementsByClassName('filter__dropdown'),
    filterRooms: document.getElementsByClassName('rooms__checkbox'),
    filterFields: document.getElementsByClassName('range__input')
};

export function render () {
    const markup = `
        <form method="GET" class="container p-0" id="filter-form">
                <div class="heading-1">Выбор квартир:</div>
                <div class="filter">
                    <div class="filter__col">
                        <div class="filter__label">Выбор проекта:</div>
                        <select name="complex" id="" class="filter__dropdown">
                            <option value="">Все проекты</option>
                            <option value="Генеральский"
                                >ЖК Генеральский</option
                            >
                            <option value="Речной">ЖК Речной</option>
                            <option value="Лесной">ЖК Лесной</option>
                            <option value="Квантум">ЖК Квантум</option>
                        </select>
                    </div>
                    <div class="filter__col rooms">
                        <div class="filter__label">Комнат:</div>
                        <div class="rooms__wrapper">
                            <input
                                name="rooms"
                                type="checkbox"
                                id="rooms_1"
                                class="rooms__checkbox"
                                value="1"
                            /><label for="rooms_1" class="rooms__btn">1</label>
                            <input
                                name="rooms"
                                type="checkbox"
                                id="rooms_2"
                                class="rooms__checkbox"
                                value="2"                                
                            /><label for="rooms_2" class="rooms__btn">2</label>
                            <input
                                name="rooms"
                                type="checkbox"
                                id="rooms_3"
                                class="rooms__checkbox"
                                value="3"
                            /><label for="rooms_3" class="rooms__btn">3</label>
                            <input
                                name="rooms"
                                type="checkbox"
                                id="rooms_4"
                                class="rooms__checkbox"
                                value="4"
                            /><label for="rooms_4" class="rooms__btn">4</label>
                            <input
                                name="rooms"
                                type="checkbox"
                                id="rooms_5"
                                class="rooms__checkbox"
                                value="5"
                            /><label for="rooms_5" class="rooms__btn">5</label>
                        </div>
                    </div>
                    <div class="filter__col">
                        <div class="filter__label">Площадь:</div>
                        <div class="range__wrapper">
                            <label class="range">
                                <div for="" class="range__label">от</div>
                                <input
                                    name="sqmin"
                                    min="0"
                                    type="number"
                                    class="range__input"
                                    placeholder="38"
                                />
                                <div class="range__value">м2</div>
                            </label>
                            <label class="range">
                                <div for="" class="range__label">до</div>
                                <input
                                    name="sqmax"
                                    min="0"
                                    type="number"
                                    class="range__input"
                                    placeholder="120"
                                />
                                <div class="range__value">м2</div>
                            </label>
                        </div>
                    </div>
                    <div class="filter__col">
                        <div class="filter__label">Стоимость:</div>
                        <div class="range__wrapper">
                            <div class="range">
                                <label for="" class="range__label">от</label>
                                <input
                                    type="number"
                                    name="pricemin"
                                    min="0"
                                    class="range__input range__input--price"
                                    placeholder="2325000"
                                />
                                <div class="range__value">₽</div>
                            </div>
                            <div class="range">
                                <label for="" class="range__label">до</label>
                                <input
                                    type="number"
                                    name="pricemax"
                                    min="0"
                                    class="range__input range__input--price"
                                    placeholder="4525000"
                                />
                                <div class="range__value">₽</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter__buttons">
                    <button type="submit" class="filter__show">Показать 119 объектов</button>
                    <button type="reset" class="filter__reset">Сбросить фильтр</button>
                </div>
            </form>
    `;

    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);
}


export function getInput(){
    
    const search_params = new URLSearchParams();

    if (elements.filterSelect[0].value !== '') {
        search_params.append(elements.filterSelect[0].name, elements.filterSelect[0].value);
    }

    const roomsValuesArr = [];   
    Array.from(elements.filterRooms).forEach((checkbox)=> {
        if (checkbox.value !== '' && checkbox.checked) {
            roomsValuesArr.push(checkbox.value)
        }
    });
    const roomsValuesString = roomsValuesArr.join(',');
    if (roomsValuesString !== '') {
        search_params.append('rooms', roomsValuesString);
    }

    Array.from(elements.filterFields).forEach((input) => {
        if (input.value != '') {
            search_params.append(input.name, input.value)
        }
    });

    const query_string = search_params.toString();

    if (query_string) {
        return '?' + query_string;
    } else {
        return ''
    }

}

export function changeBtnText(number){
    if (number > 0) {
        elements.filterButton[0].innerText = `Показать ${number} объектов`;
    } else {
        elements.filterButton[0].innerText = `Объекты не найдены`;
    }
    
}