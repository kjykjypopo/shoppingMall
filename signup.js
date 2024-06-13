document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    // 비밀번호와 비밀번호 확인 일치 여부 확인
    if (password !== confirmPassword) {
        errorMessage.textContent = '비밀번호가 일치하지 않습니다.';
        return;
    }

    // 이메일 형식 검사 (간단한 예제)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = '유효한 이메일 주소를 입력하세요.';
        return;
    }

    // 기타 유효성 검사 통과 시, 폼 데이터를 서버로 전송
    // 여기서는 콘솔에 로그를 출력
    console.log('회원가입 데이터:', {
        username: username,
        email: email,
        password: password
    });

    // 서버로 폼 데이터를 전송하는 코드 작성 가능
    // 예: fetch('/signup', { method: 'POST', body: JSON.stringify({ username, email, password }) })

    errorMessage.textContent = '회원가입이 성공적으로 완료되었습니다.';
});
