<?php
include 'includes/functions.php';
my_header("Kонтакти - Овчарски Университет");
?>
	<div class="wrap">
		<div id="content">
			<div class="news">
				<div class="news-title">
					<h2>За контакти</h2>
				</div>
				<br />
				<div class="news-content">
					<form id="contactForm">
						<input type="text" placeholder="Име" /><br />
						<input type="text" placeholder="Заглавие" /><br />
						<input type="email" pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z]{2,10})+"  placeholder="Е-мейл" /><br />
						<textarea placeholder="Съдържание" id="textBox"></textarea><br />
						<input type="submit" value="Изпрати" id="contactFormSubmit" />
					</form>
					<div id="contact-pic">
						<img src="images/contact.jpg" alt="contact image" />
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
	</div>
<?php footer(); ?>
</body>
</html>