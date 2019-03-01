<?php

header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
    $food = $_GET['food'];
    $foodArray = array('tuna','bacon','beef','ham','kimchi','rice','kimbab','egg');

    if (in_array($food, $foodArray)) {
        echo 'We do have '.$food.'!';
    }
    elseif ($food=='') {
        echo 'Enter a food you idiot';
    }
    else {
        echo 'Sorry punk we dont sell '.$food.'!';
    }

echo '</response>';

?>