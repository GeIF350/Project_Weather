document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    let input = document.querySelector('#searchInput').value;

    console.log(input);
    
})