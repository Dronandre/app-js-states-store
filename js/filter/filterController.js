import * as filterView from './filterView.js';
import Filter from './filterModel.js';

export default async function (state) {
    console.log('Filter stated!');

    filterView.render();

    await filterFormHandler(state);

    document.getElementById("filter-form").addEventListener('change', function (){
        filterFormHandler(state);        
    })   
    
    document.getElementById("filter-form").addEventListener('reset', function (){
        resetFormHandler(state);        
    }) 

    document.getElementById("filter-form").addEventListener('submit', function (e){
        e.preventDefault();        
    }) 
}

async function filterFormHandler(state){
    // собираем данные с формы, формируем запрос
    state.query = filterView.getInput();

    // Делаем запрос и получаем данные с сервера
    state.filter = new Filter(state.query);
    state.results = await state.filter.getResults(state);

    // Обновляем текст на кнопке
    filterView.changeBtnText(state.filter.results.length);

}
async function resetFormHandler(state){

    state.query = '';

    // Делаем запрос и получаем данные с сервера
    state.filter = new Filter(state.query);
    state.results = await state.filter.getResults(state);

    // Обновляем текст на кнопке
    filterView.changeBtnText(state.filter.results.length);

}

