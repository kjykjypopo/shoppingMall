document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // 이메일 형식 검사 (간단한 예제)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = '유효한 이메일 주소를 입력하세요.';
        return;
    }

    // 비밀번호 길이 검사 (예: 최소 6자 이상)
    if (password.length < 6) {
        errorMessage.textContent = '비밀번호는 최소 6자 이상이어야 합니다.';
        return;
    }

    // 기타 유효성 검사 통과 시, 로그인 데이터를 서버로 전송
    // 여기서는 콘솔에 로그를 출력
    console.log('로그인 데이터:', {
        email: email,
        password: password
    });

    // 서버로 로그인 데이터를 전송하는 코드 작성 가능
    // 예: fetch('/login', { method: 'POST', body: JSON.stringify({ email, password }) })

    errorMessage.textContent = '로그인이 성공적으로 완료되었습니다.';
});
