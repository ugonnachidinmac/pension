let yourage = document.getElementById("yourage");
let yrs_in_service = document.getElementById("yrs_in_service");
let outcome = document.getElementById("outcome");
let age;
let year;

summitbtn.onclick = function(){
age = yourage.value;
age = Number(age);
year = yrs_in_service.value;
year = Number(year);

if(age >= 60 && year >=30){
    outcome.textContent = `You are due for retirement, Congratuletion!!!`;
} else {
    outcome.textContent = `You are still in service`;
}
}

clearbtn.onclick = function() {
    yourage.value = '';
    yrs_in_service.value = '';
    outcome.innerHTML = '';
}





{/* <script>
    function submitform() {
        let age = parseInt(document.getElementById('yourage').value);
        let year = parseInt(document.getElementById('yrs_in_service').value);

        if (age >= 60 && year >= 30) {
            document.getElementById('outcome').innerHTML = 'You are due for Retirement';
        } else {
            document.getElementById('outcome').innerHTML = 'You are still in Service';
        }
    }
</script> */}