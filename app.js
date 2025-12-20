body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background: white;
  color: black;
}

header {
  max-width: 900px;
  margin: auto;
}

h1 {
  margin-bottom: 10px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
}

nav button {
  padding: 10px 20px;
  margin-right: 10px;
  border: 1px solid black;
  background: white;
  cursor: pointer;
}

nav button.active {
  background: black;
  color: white;
}

main {
  max-width: 900px;
  margin: auto;
}

#cardsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.card {
  border: 1px solid black;
  padding: 15px;
  cursor: pointer;
}

.card:hover {
  background: #f2f2f2;
}

.hidden {
  display: none;
}

#backBtn {
  margin-bottom: 20px;
  padding: 8px 16px;
  border: 1px solid black;
  background: white;
  cursor: pointer;
}
