function toggleDiseases() {
  toggleContent('diseaseContent');
}

function toggleMedicines() {
  toggleContent('medicineContent');
}

function toggleExercise() {
  toggleContent('exerciseContent');
}

function toggleHealthyFoods() {
  toggleContent('foodContent');
}

function toggleContent(contentId) {
  const content = document.getElementById(contentId);
  content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
}

function getDiseaseDetails() {
  const selectedDisease = document.getElementById('diseaseDropdown').value;
  alert(`Details for ${selectedDisease}: Proper medicine is Medicine ${selectedDisease.charAt(selectedDisease.length - 1)}`);
}

function getMedicineDetails() {
  const selectedMedicine = document.getElementById('medicineDropdown').value;
  alert(`Details for ${selectedMedicine}: Recommended exercise is Exercise ${selectedMedicine.charAt(selectedMedicine.length - 1)}`);
}

function getExerciseDetails() {
  const selectedExercise = document.getElementById('exerciseDropdown').value;
  alert(`Details for ${selectedExercise}: Healthy food to take is Food ${selectedExercise.charAt(selectedExercise.length - 1)}`);
}

function getFoodDetails() {
  const selectedFood = document.getElementById('foodDropdown').value;
  alert(`Details for ${selectedFood}: Consult with a healthcare professional for personalized recommendations.`);
}
