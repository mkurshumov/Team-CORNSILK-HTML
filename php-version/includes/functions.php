<?php

function my_header($title){
	?>
<!DOCTYPE html>
<html>
<head>
	<title><?php echo $title; ?></title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/mobile.css">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="text/javascript" src="scripts/scripts.js"></script>
	<link rel="shortcut icon" type="image/png" href="images/fav.png"/>
	<meta charset="UTF-8" />
</head>
<body>
	<div id="header">
		<div class="wrap">
			<a href="index"><div id="logoHolder"><div id="logo"></div></div></a>
			<div id="menu">
                <ul id="ulMenu">
                    <li><a href="index">Начало</a></li>
                    <li><a href="news">Новини</a></li>
                    <li><a href="fasttracks">Fast Track</a></li>
                    <li><a href="trainers">Преподаватели</a></li>
                    <li><a href="jobs">Професии</a></li>
                    <li><a href="jobads">Работа</a></li>
                    <li><a href="contacts">Контакти</a></li>
                </ul>
			</div>
            <div class="clear"></div>
		</div>
	</div>
	<div id="underHeader"></div>
	<?php
}

function footer() {
	?>
<footer>
<div id="footer">
	<div class="wrap">
		<div id="footerLeft">&copy;2014 - OvchUni. All Rights Reserved.</div>
		<div id="footerRight">
			<ul id="footerMenu">
				<li><a href="trainers">Преподаватели</a></li>
				<li><a href="jobs">Професии</a></li>
				<li><a href="contacts">Контакти</a></li>
				<li><a href="http://validator.w3.org/check?uri=http%3A%2F%2Fvalentinn.cloudvps.bg%2Findex" target="_blank"><img src="images/html-validate.png" alt="html validator" /></a></li>
			</ul>
		</div>
		<div class="clear"></div>
	</div>
</div>
</footer>
	<?php
}