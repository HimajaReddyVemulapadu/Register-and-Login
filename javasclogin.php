<?php
$connect = mysqli_connect("localhost", "root", "", "sr edu data") or die("connection failed");
if (!empty($_POST['login'])) {
    $username = $_POST['emaillogin'];
    $password = $_POST['passwordlogin'];
    $query = "select * from register where email='$username' and passwords='$password'";
    $result = mysqli_query($connect, $query);
    $count = mysqli_num_rows($result);
    if ($count > 0) {
        header("Location: listingpage.html");
    } else {
        echo "login not successful";
    }
}
