import * as filterView from './filterView.js';

export default function () {
    console.log('Filter stated!');
    filterView.render();

    document.getElementById("filter-form").addEventListener('change', ()=>{
        console.log('Change');
        filterView.getInput();
    })

    
}