
function toggleBox(index) {
  document.querySelectorAll('.bundle-option').forEach((option, i) => {
    const isSelected = i === index - 1;
    option.classList.toggle('active', isSelected);
    option.querySelector('input[type="radio"]').checked = isSelected;
    document.getElementById(`details-${i + 1}`).classList.toggle('active', isSelected);
  });
}
