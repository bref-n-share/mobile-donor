# Mobile Donor

## Sommaire
* [Architecture](#architecture)
* [Installer le projet](#installer-le-projet)
  * [Prérequis](#prérequis)
  * [Récupérer les sources](#récupérer-les-sources)
  * [Installer les sources](#installer)
  * [Lancer le projet](#lancer)

## Architecture

### Technologies utilisées

L'application a été dévelopée avec React Native.
Redux à aussi été utilisé pour gérer le flux de données.
Expo permet de lancer l'application sur un device ios ou android.

## Installer le projet
### Prérequis
Avoir NodeJS d'installé.

### Récupérer les sources
La première étape est de cloner le repository afin d'obtenir les sources du projet. 
Pour rappel :
```
SSH : git clone git@github.com:bref-n-share/mobile-donor.git
HTTPS : git clone https://github.com/bref-n-share/mobile-donor.git
```
### Installer
Installer les paquets 
```
cd app/
npm install
```

### Lancer
Si le back est lancé, vous pouvez lancer le front
```
# dev environment:
cd app/
npm start

# prod environment
cd app/
expo start --no-dev --minify
```
