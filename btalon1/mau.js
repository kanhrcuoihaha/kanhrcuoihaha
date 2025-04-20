document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const closeSuccessModalBtn = document.getElementById('closeSuccessModal');

    // Xử lý submit form
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Lấy dữ liệu từ form
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Ở đây bạn có thể thêm code để gửi dữ liệu đến server
        // Ví dụ: sử dụng fetch API hoặc AJAX
        
        console.log('Form data:', formData);
        
        // Hiển thị modal thành công
        successModal.style.display = 'flex';
        
        // Reset form
        contactForm.reset();
    });

    // Đóng modal khi click nút đóng
    closeModalBtn.addEventListener('click', function() {
        successModal.style.display = 'none';
    });

    closeSuccessModalBtn.addEventListener('click', function() {
        successModal.style.display = 'none';
    });

    // Đóng modal khi click bên ngoài modal
    window.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });

    // Hiệu ứng cho các input
    const inputGroups = document.querySelectorAll('.input-group');
    
    inputGroups.forEach(group => {
        const input = group.querySelector('input, select, textarea');
        const label = group.querySelector('label');
        
        // Kiểm tra nếu input có giá trị khi load trang
        if (input.value) {
            label.style.top = '-20px';
            label.style.fontSize = '0.8rem';
            label.style.color = '#6e8efb';
        }
        
        // Xử lý khi input focus
        input.addEventListener('focus', function() {
            label.style.top = '-20px';
            label.style.fontSize = '0.8rem';
            label.style.color = '#6e8efb';
            
            if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
                input.style.borderBottom = '2px solid #6e8efb';
            }
        });
        
        // Xử lý khi input blur
        input.addEventListener('blur', function() {
            if (!input.value) {
                label.style.top = '10px';
                label.style.fontSize = '1rem';
                label.style.color = '#999';
            }
            
            if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
                input.style.borderBottom = '1px solid #ccc';
            }
        });
        
        // Xử lý khi input thay đổi (cho select)
        input.addEventListener('change', function() {
            if (input.value) {
                label.style.top = '-20px';
                label.style.fontSize = '0.8rem';
                label.style.color = '#6e8efb';
            } else {
                label.style.top = '10px';
                label.style.fontSize = '1rem';
                label.style.color = '#999';
            }
        });
    });
});