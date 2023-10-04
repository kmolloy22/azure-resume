window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(res => {
        return res.json()
    }).then(res => {
        console.log("API response", res)
        count = res.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(err) {
        console.log(err)
    })

    return count;
}