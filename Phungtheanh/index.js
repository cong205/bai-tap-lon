// JavaScript để hiển thị/ẩn các tỉnh bổ sung
const toggleButton = document.getElementById('toggleButton');
const additionalLocations = document.getElementById('additional-locations');
let isExpanded = false;

toggleButton.addEventListener('click', () => {
    if (isExpanded) {
        additionalLocations.classList.add('hidden');
        toggleButton.textContent = 'Xem thêm ▼';
    } else {
        additionalLocations.classList.remove('hidden');
        toggleButton.textContent = 'Thu gọn ▲';
    }
    isExpanded = !isExpanded;
});
