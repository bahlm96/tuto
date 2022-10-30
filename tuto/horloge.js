fonction Temps {
 // Création de l'objet de la classe Date
 var date = nouvelle date;
 // Obtenir l'heure actuelle
 var heure = date.getHours;
 // Récupère la minute actuelle
 var minute = date.getMinutes;
 // Récupère la seconde actuelle
 var seconde = date.getSeconds;
 // Variable pour stocker AM / PM
 var période = "";
 // Attribution AM/PM selon l'heure courante
 si heure >= 12 {
 période = "PM" ;
 } autre {
 période = "AM" ;
 }
 // Conversion de l'heure au format 12 heures
 si heure == 0 {
 heure = 12;
 } autre {
 si heure > 12 {
 heure = heure - 12;
 }
 }
 // Mise à jour de l'heure, des minutes et des secondes
 // s'ils sont inférieurs à 10
 heure = mise à jourheure;
 minute = mise à jourminute;
 seconde = mise à jourseconde;
 // Ajout d'éléments de temps au div
 document.getElementById"digital-clock".innerText = heure + " : " + minute + " : " + seconde + " " + point ;
 // Régler la minuterie sur 1 s 1000 ms
 setTimeoutTime, 1000;
}
 // Fonction pour mettre à jour les éléments de temps s'ils sont inférieurs à 10
 // Ajoute 0 avant les éléments temporels s'ils sont inférieurs à 10
fonction updatet {
 si t < 10 {
 renvoie "0" + t;
 }
 sinon {
 renvoie t;
 }
}
Heure;