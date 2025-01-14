const sliderIndexes = {
    slider1: 0,
    slider2: 0,
    slider3: 0,
  };

function changeSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const totalSlides = slider.children.length;

    sliderIndexes[sliderId] += direction;

    if (sliderIndexes[sliderId] < 0) {
      sliderIndexes[sliderId] = totalSlides - 1;
    } else if (sliderIndexes[sliderId] >= totalSlides) {
      sliderIndexes[sliderId] = 0;
    }

    slider.style.transform = `translateX(-${sliderIndexes[sliderId] * 100}%)`;
  }

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 폼 제출 방지
  
    // 폼 데이터 가져오기
    const emailTo = "wt060408@gmail.com"; // 수신자 이메일 주소
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const userEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // mailto 링크 생성
    const subject = encodeURIComponent(`New Inquiry from ${firstName} ${lastName}`);
    const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${userEmail}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  
    // 메일 클라이언트 열기
    window.location.href = mailtoLink;
  });
  
















// emailjs.init('3ev6wGHT9LNok24pd'); // Public Key로 초기화

// // 폼 데이터 전송 로직
// document.querySelector('form').addEventListener('submit', function (event) {
//   event.preventDefault(); // 기본 폼 제출 동작 막기

//   // 폼 데이터를 가져오기
//   const firstName = document.getElementById('first-name').value.trim();
//   const lastName = document.getElementById('last-name').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const message = document.getElementById('message').value.trim();
  
//   // 폼 데이터를 가져오기
//   const formData = {
//     first_name: document.getElementById('first-name').value,
//     last_name: document.getElementById('last-name').value,
//     email: document.getElementById('email').value,
//     message: document.getElementById('message').value,
//   };
//   if (!firstName || !lastName || !email || !message) {
//     alert('빈칸을 채워주세요');
//     return; // 폼 제출 중단
//   }
//   // EmailJS에 맞는 형식으로 데이터 전송
//   emailjs.send('service_zz5hfnk', 'template_dzq58cg', {
//     first_name: formData.first_name, // 템플릿에서 정의한 변수 이름
//     last_name: formData.last_name,  // 템플릿에서 정의한 변수 이름
//     email: formData.email,          // 템플릿에서 정의한 변수 이름
//     message: formData.message,      // 템플릿에서 정의한 변수 이름
//   })
//     .then(function (response) {
//       console.log('SUCCESS!', response.status, response.text);
//       alert('Your message has been sent successfully!');
//       document.querySelector('form').reset(); // 폼 초기화
//     })
//     .catch(function (error) {
//       console.log('FAILED...', error);
//       alert('Failed to send the message. Please try again later.');
//     });
// });