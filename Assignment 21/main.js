var oceans = ["Pacific ocean", "Indian ocean", "Atlantic ocean", "Arctic ocean", "Antarctic ocean"];
console.log(oceans[5]); // Intentional error: Arrays are zero-indexed, so index 5 is out of bounds.
oceans[4] = "Antarctic ocean"; // Correcting the error by accessing a valid index.
console.log(oceans[4]);
