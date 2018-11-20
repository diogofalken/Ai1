var labels = document.querySelectorAll("label");

function hover() {}

labels.forEach(label => {
  label.addEventListener("mouseover", function() {
    label.style.backgroundColor = label.innerHTML;
  });
  label.addEventListener("mouseout", function() {
    label.style.backgroundColor = "white";
  });
});
