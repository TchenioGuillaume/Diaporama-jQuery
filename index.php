<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Diaporama jQuery</title>

  <!-- Lien CSS -->
  <link rel="stylesheet" href="style.css">

</head>

<?php
  include '../../header.php';
?>

<body>

  <div class="diaporama">
    <img src="1.jpeg" id="1">
    <img src="2.jpeg" id="2">
    <img src="3.jpeg" id="3">
    <img src="4.jpeg" id="4">
  </div>

  <div class="boutons">
    <a href="#" class="left">Précèdent</a>
    <a href="#" class="right">Suivant</a>
  </div>


  <script src= "jquery-3.1.1.js"></script>
  <script type="text/javascript" src="script.js"></script>

</body>
</html>
