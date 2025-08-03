document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);

  let userInputs = {};

  for (const key of formData.keys()) {
    if (formData.get(key).toString().length > 0) {
      userInputs[key] = formData.get(key).toString();
    }
  }

  gradingSystem(userInputs);
});

function gradingSystem(studentData) {
  let studentGrades = {
    class: studentData.class,
    name: `${studentData.firstName} ${studentData.lastName}`,
    math: parseInt(studentData.Math),
    science: parseInt(studentData.Science),
    music: parseInt(studentData.Music),
    grammar: parseInt(studentData.Grammar),
    age: parseInt(studentData.age),
  };

  let totalSum =
    studentGrades.math +
    studentGrades.science +
    studentGrades.music +
    studentGrades.grammar;
  let average = totalSum / 4;

  let finalMessage;

  if (average >= 90) {
    finalMessage = "You passed and can skip a grade!";
  } else if (average >= 70) {
    finalMessage = "You passed.";
  } else {
    finalMessage = "You failed. Get the #### out my class.";
  }

  let displayDiv = document.querySelector(".display");
  let heading = displayDiv.querySelector("h1");

  heading.textContent = `Student: ${
    studentGrades.name
  }, Average: ${average.toFixed(2)}, Status: ${finalMessage}`;
}
