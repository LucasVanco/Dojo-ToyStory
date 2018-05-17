# Dojo-ToyStory

Ce dojo à pour but de vous exercer à créer un back (API) et un front qui utilise cette API.

## Back-end :

Créer une API qui permet la récupération et l'ajout de nouveau jouet à la base de données.

### Routes :

* `GET /toy` - obtenir la liste des jouets
* `POST /toy` - ajouter un nouveau jouet

### Base de données

La base de données se symbolisera par un fichier `.JSON` contenant l'ensemble des jouets.

### Technologies

Les technologies utilisées sont : [Express](http://expressjs.com/fr/) pour l'API et [Fs](https://nodejs.org/docs/latest-v9.x/api/fs.html) pour la lecture/écriture du fichier `.JSON`.

## Front-end :

Réaliser un site dynamique permettant le listing de l'ensemble des jouets et l'ajout de nouveaux objets.

### Pages

* `/` - listing les jouets, un bouton `ajouter` qui renvoie vers la page d'ajout des jouets.
* `/add` - formulaire pour ajouter un nouveau jouet.

### Technologie

Le site a été réalisé avec [React](https://reactjs.org/)

> utilisation de `create-react-app` pour initialiser une nouvelle application.

### CSS 

Le CSS du site a été réalisé avec [Bloomer](https://bloomer.js.org/#/)
