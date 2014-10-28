<?php
include 'includes/functions.php';
my_header("Обяви за работа - Овчарски Университет");
?>
	<div class="wrap">
		<div id="content">
		<h1>Обяви за работа</h1>
            <div id="allJobs">
                <div class="job">
                    <div onclick="openJobDetail(1);">
                            <div class="theJob">
                                <div class="jobPosition">Търсим пастир на пълно работно време за 60 крави.</div>
                                <div class="location">Кокорево</div>
                            </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="job">
                    <div onclick="openJobDetail(2);">
                        <div class="theJob">
                            <div class="jobPosition">Търсим иноватори в индустрията</div>
                            <div class="location">Пържиграх</div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="job">
                    <div onclick="openJobDetail(3);">
                        <div class="theJob">
                            <div class="jobPosition">Наемаме дояч за 8 бивола.</div>
                            <div class="location">Сърбогъзи</div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <div id="jobDescription">
                За повече информация info@OvchUni.bg
            </div>

            <div class="clear"></div>
		</div>
	</div>
<?php footer(); ?>
</body>
</html>
