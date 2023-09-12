const Button = document.getElementById("button");
const ClearButton = document.getElementById("clear");
const userListElement = document.getElementById("userList");

// Vérifie s'il y a des utilisateurs dans le stockage local
let users = JSON.parse(localStorage.getItem("users")) || [];

// Affiche les utilisateurs existants sur la page
displayUsers();

Button.onclick = () => {
  const nom = document.getElementById("nom").value;
  const age = document.getElementById("age").value;

  // Crée un nouvel utilisateur
  const user = {
    nom: nom,
    age: age
  };

  // Ajoute le nouvel utilisateur au tableau d'users
  users.push(user);

  // Met à jour le stockage local avec le tableau d'users mis à jour
  localStorage.setItem("users", JSON.stringify(users));

  // Réinitialise les champs de saisie
  document.getElementById("nom").value = "";
  document.getElementById("age").value = "";

  // Réaffiche les users sur la page
  displayUsers();
};

ClearButton.onclick = () => {
  // Supprime tous les users du stockage local
  localStorage.removeItem("users");
  users = [];

  // Réaffiche les users sur la page (la liste sera vide)
  displayUsers();
};

function displayUsers() {
    userListElement.innerHTML = "";
  
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const listItem = document.createElement("li");
  
      // Crée un champ d'édition pour le nom
      const nomInput = document.createElement("input");
      nomInput.value = user.nom;
      listItem.appendChild(nomInput);
  
      // Crée un champ d'édition pour l'âge
      const ageInput = document.createElement("input");
      ageInput.value = user.age;
      listItem.appendChild(ageInput);
  
      // Ajoute un bouton de sauvegarde pour mettre à jour les valeurs
      const saveButton = document.createElement("button");
      saveButton.textContent = "Enregistrer";
      saveButton.addEventListener("click", function () {
        updateUser(i, nomInput.value, ageInput.value);
      });

      listItem.appendChild(saveButton);
  
      // Ajoute un bouton de suppression pour chaque utilisateur
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Supprimer";
      deleteButton.addEventListener("click", function () {
        deleteUser(i);
      });
      listItem.appendChild(deleteButton);

      userListElement.appendChild(listItem);
    }
  }


  function updateUser(index, newNom, newAge) {
    // Met à jour les valeurs de l'utilisateur correspondant à l'index donné
    users[index].nom = newNom;
    users[index].age = newAge;
  
    // Met à jour le stockage local avec le tableau d'utilisateurs mis à jour
    localStorage.setItem("users", JSON.stringify(users));
  
    // Réaffiche les utilisateurs sur la page avec les nouvelles valeurs
    displayUsers();
  }

function deleteUser(index) {
  // Supprime l'utilisateur correspondant à l'index donné du tableau d'utilisateurs
  users.splice(index, 1);
  // Met à jour le stockage local avec le tableau d'utilisateurs mis à jour
  localStorage.setItem("users", JSON.stringify(users));
  // Réaffiche les utilisateurs sur la page
  displayUsers();
}


function countdown(num) {
  // Condition de sortie : si le nombre est inférieur ou égal à 0
  if (num <= 0) {
    console.log("Terminé !");
  } else {
    console.log(num);
    // Appel récursif avec un nombre réduit de 1
    countdown(num - 1);
  }
}

// Appel de la fonction countdown avec le nombre de départ
countdown(5);


function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Effectuer une passe sur le tableau
    for (let j = 0; j < n - i - 1; j++) {
      // Comparer les éléments adjacents
      if (arr[j] > arr[j + 1]) {
        // Échanger les éléments si l'élément courant est plus grand que l'élément suivant
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Exemple d'utilisation
const array = [5, 3, 8, 4, 2];
console.log("Avant le tri :", array);

const sortedArray = bubbleSort(array);
console.log("Après le tri :", sortedArray);