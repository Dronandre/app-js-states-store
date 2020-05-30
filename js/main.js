import filterController from './filter/filterController.js'

const state = {
    query: ''
}

// window.state = state;

// Запустить контроллер Фильтра
filterController(state);