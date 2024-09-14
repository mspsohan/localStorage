document.addEventListener("DOMContentLoaded", function () {
   const displayText = document.getElementById("displayText");
   const textInput = document.getElementById("textInput");
   const button = document.getElementById("saveButton");

   function updateSavedText() {
      const savedText = localStorage.getItem("savedText");
      if (savedText) {
         displayText.textContent = savedText;
      }
   }

   button.addEventListener("click", function () {
      const input = textInput.value;
      textInput.value = "";
      if (input) {
         localStorage.setItem("savedText", input);
         updateSavedText();
      }
   });
   updateSavedText();
});
