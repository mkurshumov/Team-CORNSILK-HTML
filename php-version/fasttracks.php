<?php
include 'includes/functions.php';
my_header("Fast Track - Овчарски Университет");
?>
<div class="wrap">
    <div id="content">
        <h1>Новини</h1>

        <div class="course" onclick="openCourseDetails(1);">Викове</div>
        <div class="course" onclick="openCourseDetails(2);">Дресировка на куче</div>

        <div id="courseContent">
           Избери курс &#9650;
           <br/>
            <br/>
            Fast Track курсовете представляват ускорени курсове, които ви дават максимално много знания за по-кратко време. Материалът се усвоява лесно поради програмата ни, която включва много упражнения.
        </div>
    </div>
</div>
<?php footer(); ?>
</body>
</html>
