document.getElementById('loadDataBtn').addEventListener('click', function() {
    fetch('/api/data') // 서버의 특정 엔드포인트로 요청을 보냄
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = `<p>Data: ${data.message}</p>`;
        })
        .catch(error => console.error('Error:', error));
});
