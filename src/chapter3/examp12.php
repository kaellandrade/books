<?php
    global $TESTE;
    $TESTE = 10;
    function changeGlobal(){
        global $TESTE;
        echo "Inside function $TESTE <br>";
        $TESTE = 100;
    }
    changeGlobal();
    echo $TESTE;
    /*
    function longdate($timestamp){
        $tempDate = date("l F jS Y", $timestamp);
        return $tempDate;
    }

    echo longdate(time() + (4 * 24 * 60 * 60));
    */