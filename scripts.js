 ymaps.ready(init);
function init() {
	var myMap = new ymaps.Map("map", {
                center: [54.726381, 55.993098],
                zoom: 7,
                //controls: ['zoomControl']
            });
	window.myMap = myMap;
	//myMap.setType('yandex#hybrid');
	/*
	
	*/
	var Things = [[54.727443, 56.013535, "ООО «Башкирэнерго», Башкирэнерго по Угэс Юго-Восточный РЭС"], [54.718662, 56.042861, "Уфимские городские электрические сети"],
	 [54.762506, 56.017022, "Восточный район электрических сетей Башрэс-угэс"], [53.629176, 55.953646, "МУП «Электрические Сети» Городского Округа Город Стерлитамак (ВОЗМОЖНЫ УГРОЗЫ)"]];
	for (var i = 0;  i < Things.length - 1; i++) 
	{
 		var myCircle = new ymaps.Circle([[Things[i][0], Things[i][1]], 10000],
		{
			balloonContent: Things[i][2]
		},
		{
			fillColor: "#ff0000",
			fillOpacity: 0.6,
		});
		myMap.geoObjects.add(myCircle);
	}
	var myCircle = new ymaps.Circle([[Things[3][0], Things[3][1]], 10000],
		{
			balloonContent: Things[3][2]
		},
		{
			fillColor: "#ff0000",
			fillOpacity: 0.6,
			//
		});
		myMap.geoObjects.add(myCircle);

		//
		// Weather
		//

	var myCircle = new ymaps.Circle([[53.374691, 56.168964], 30000],
		{
			balloonContent: "Сильная гроза"
		},
		{
			fillColor: "#fff000",
			fillOpacity: 0.7,
			fillImageHref: 'img/veter.png',
		});	
		myMap.geoObjects.add(myCircle);	
		var myCircle = new ymaps.Circle([[54.746418, 55.372041], 30000],
		{
			balloonContent: "Сильный град"
		},
		{
			fillColor: "#fff000",
			fillOpacity: 0.7,
			fillImageHref: 'img/grad.png',
		});	
		myMap.geoObjects.add(myCircle);
		var myCircle = new ymaps.Circle([[53.402447, 59.353444], 30000],
		{
			balloonContent: "ЛЮТЫЙ СМЕРЧ"
		},
		{
			fillColor: "#fff000",
			fillOpacity: 0.7,
			fillImageHref: 'img/SMERCH.png',
		});	
		myMap.geoObjects.add(myCircle);
	var myCircle = new ymaps.Circle([[54.884191, 55.984832], 30000],
		{
			balloonContent: "Сильное наводнение"
		},
		{
			fillColor: "#fff000",
			fillOpacity: 0.7,
			fillImageHref: 'img/navodnenie.png',
		});	
	
		myMap.geoObjects.add(myCircle);		
		var myCircle = new ymaps.Circle([[55.839789, 55.850180], 30000],
		{
			balloonContent: "Сильный порывыстый ветер 19.5 м/с"
		},
		{
			fillColor: "#fff000",
			fillOpacity: 0.7,
			fillImageHref: 'img/cloud.png',
		});	
		myMap.geoObjects.add(myCircle);	
		var myCircle = new ymaps.Circle([[53.452933, 50.344239], 30000],
		{
			balloonContent: "Сильный порывыстый ветер 19.5 м/с"
		},
		{
			fillColor: "#fff000",
			fillOpacity: 0.7,
			fillImageHref: 'img/zemletrias.png',
		});	
		myMap.geoObjects.add(myCircle);		
		
		//
		// Weather
		//
}
function Move_Object(MyCircle) {
	var MoveCoords = [55.76122432960969, 37.578535038979666];
	var difference = [0, 0];
	difference[0] = MoveCoords[0] - MyCircle.geometry.getCoordinates()[0];
	difference[1] = MoveCoords[1] - MyCircle.geometry.getCoordinates()[1];
	difference[0] /= 100;
	difference[1] /= 100;

	while (MyCircle.geometry.getCoordinates() <= MoveCoords)
	{
		var NewCoords = MyCircle.geometry.getCoordinates();
		NewCoords[0] += difference[0];
		NewCoords[1] += difference[1];

		MyCircle.geometry.setCoordinates(NewCoords);
		console.log(MyCircle.geometry.getCoordinates());
	}
}