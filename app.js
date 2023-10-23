document.addEventListener('DOMContentLoaded', function(){
    const totalElement = document.getElementById("donut-total")
    const addDonutBtn = document.getElementById("addDonut")
    let totalDonut = 0

    function updateDonutTotal(){
        totalElement.textContent = `Donuts(s): ${totalDonut}`;
    }

    function bakeDonut(){
        totalElement.innerHTML = totalDonut;
        
        if (totalDonut >= 0){
            totalDonut ++;
            updateDonutTotal();
        }   
     }

    addDonutBtn.addEventListener('click', bakeDonut);
})