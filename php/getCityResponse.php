<?php
error_reporting(0);
$cities = array(
    "Lesnar" => "
                  Бро́к Е́двард Ле́снар (англ. Brock Edward Lesnar; *12 липня 1977,
                  Вебстер, Південна Дакота, США) — американський спортсмен, борець,
                  спеціаліст зі змішаних бойових мистецтв (англ. MMA), реслер і
                  екс-гравець у американський футбол (команда «Міннесота Вайкінгс»).
                   Чемпіон світу зі змішаних бойових мистецтв у важкій ваговій категорії
                   за версією UFC (2008–2010 роки). Дворазовий чемпіон США з боротьби
                    за версіями NJCAA (1998 рік), NCAA (2000 рік). Всеамериканський борець.
                    Багаторазовий чемпіон із реслінгу за версіями WWE, IWGP, OVW." ,

    "Velaskez" => "Ке́йн Рамі́рес Вела́скес (англ. Cain Ramirez Velasquez; 28 липня 1982,
                  Салінас, Каліфорнія, США) — американський спортсмен мексиканського походження,
                  професійний борець і спеціаліст зі змішаних бойових мистецтв. Дворазовий і діючий
                  чемпіон світу зі змішаних бойових мистецтв у важкій ваговій категорії за версією
                  UFC (2010—2011 роки, з 2012 року дотепер). Чемпіон США з вільної і американської
                  боротьби за версіями NCAA та NJCAA. Всеамериканський борець.",
    "Pier" => "Жорж Сен-П'єр (фр. Georges St-Pierre; *19 травня 1981; Сен-Ісідор, Квебек, Канада)
                  — канадський спортсмен французького походження, спеціаліст зі змішаних бойових мистецтв.
                   Чемпіон Канади зі змішаних бойових мистецтв у напівсередній ваговій категорії за версією
                   TKO (2002—2003 роки). Дворазовий чемпіон світу зі змішаних бойових мистецтв у напівсередній
                   ваговій категорії за версією UFC (2006—2007, 2008—2013 роки).",
    "Liddel" => "Чак Де́від Лідде́лл (англ. Charles David Liddell; *17 грудня 1969, Санта-Барбара, Каліфорнія, США)
                  — американський спортсмен, професійний кікбоксер і боєць змішаного стилю. Чемпіон світу зі змішаних
                   бойових мистецтв у напівважкій ваговій категорії за версією UFC (2005 – 2007 роки). Популяризував
                    змішані бойові мистецтва в Америці і за її межами. Включений до Залу слави UFC. З 2010 року — віце-президент UFC."
);

$city = reset($_GET);
$city[0] = strtoupper($city[0]);
$i = 1;
while ($i < strlen($city)) {
    $city[$i] = strtolower($city[$i]);
    $i++;
}

if (array_key_exists($city, $cities)) {
    echo $cities[$city];
} else if(!$city){
    echo "Заповніть поле!";
}else{
  echo "Цього бійця нема в нашій базі даних.";
}
