// TODO: replace with a proper database
var clientsData = [
	{
	// 	"name": "Фирма АДИС, ООО",
	//   	"region": "RU-IRK",
	//   	"code": "ADIS",
	//  	"area": 31592,
	//   	"type": "FSC",
	//   	"number": "GFA-FM/COC-002641-ADIS",
	//   	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/ADIS.kml"
	// }, {
		"name": "Автодорлес, ООО",
	  	"region": "RU-VLG",
	  	"code": "AVTO",
	 	"area": 35183,
	 	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-AVTO",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/AVTO.kml"
	}, {
		"name": "Череповецкий фанерно мебельный комбинат, АО",
	  	"region": "RU-VLG",
	  	"code": "CFMK",
	 	"area": 49093,
	  	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-CFMK",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/CFMK.kml"
	}, {
		"name": "Дом-Строй, ООО",
	  	"region": "RU-KOS",
	  	"code": "DOMS",
	 	"area": 15424,
	  	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-DOMS",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/DOMS.kml"
	}, {
		"name": "Дукан, OOO",
	  	"region": "RU-KOS",
	  	"code": "DUKN",
	 	"area": 19757,
	  	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-DUKN",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/DUKN.kml"
	}, {
		"name": "Дуниловское, ООО",
	  	"region": "RU-KOS",
	  	"code": "DUNI",
	 	"area": 10004,
	  	"type": "FSC",
	  	"number": "",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/DUNI.kml"
	}, {
	// 	"name": "Леском, ООО",
	//   	"region": "RU-IRK",
	//   	"code": "LESK",
	//  	"area": 34765,
	//   	"type": "FSC",
	//   	"number": "GFA-FM/COC-002641-LESK",
	//   	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/LESK.kml"
	// }, {
		"name": "Лесной Мир, ООО",
	  	"region": "RU-KOS",
	  	"code": "LSMR",
	 	"area": 5803,
	  	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-LSMR",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/LSMR.kml"
	}, {
		"name": "Лесные ресурсы, ООО",
	  	"region": "RU-KOS",
	  	"code": "LSRE",
	 	"area": 53597,
	  	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-LSRE",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/LSRE.kml"
	}, {
// 		"name": "ИП Кузнецов Н.Н.",
// 	  	"region": "RU-VLA",
// 	  	"code": "KUZN",
// 	 	"area": 1250,
// 	  	"type": "FSC",
// 	  	"number": "GFA-FM/COC-002641-KUZN",
// 	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/KUZN.kml"
// 	}, {
		"name": "Никольский ДОК, OOO",
	  	"region": "RU-VLG",
	  	"code": "NDOK",
	 	"area": 13903,
	  	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-NDOK",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/NDOK.kml"
	}, {
		"name": "Руслес 44, ООО",
	  	"region": "RU-KOS",
	  	"code": "RUSL",
	 	"area": 18460,
	 	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-RUSL",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/RUSL.kml"
	}, {
		"name": "ИП Щербаков А.А.",
	  	"region": "RU-MO",
	  	"code": "SHER",
	 	"area": 13997,
	 	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-SHER",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/SHER.kml"
	}, {
		"name": "Шанс, ООО",
	  	"region": "RU-KOS",
	  	"code": "SHNS",
	 	"area": 46632,
	  	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-SHNS",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/SHNS.kml"
	}, {
		"name": "Тайга, OOO",
	  	"region": "RU-VLG",
	  	"code": "TAIG",
	 	"area": 12914,
	  	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-TAIG",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/TAIG.kml"
	}, {
	// 	"name": "Тарнога-Лес, OOO",
	//   	"region": "RU-VLG",
	//   	"code": "TRNG",
	//  	"area": 40932,
	//   	"type": "FSC",
	//   	"number": "GFA-FM/COC-002641-TRNG",
	//   	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/TRNG.kml"
	// }, {
		"name": "Узола, ООО",
	  	"region": "RU-NIZ",
	  	"code": "UZLA",
	 	"area": 22668,
	  	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-UZLA",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/UZLA.kml"
	}, {
		"name": "ВетлугаЛесСервис, ООО",
	  	"region": "RU-NIZ",
	  	"code": "VTLG",
	 	"area": 14366,
	  	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-VTLG",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/VTLG.kml"
	}, {
		"name": "Шервуд, ООО",
	  	"region": "RU-NIZ",
	  	"code": "SHWD",
	 	"area": 47027,
	  	"type": "FSC",
	  	"number": "",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/SHWD.kml"
	}, {
		"name": "Бизнес-Лес, ООО",
	  	"region": "RU-BRY",
	  	"code": "BIZN",
	 	 "area": 16879,
	  	"type": "FSC",
	  	"number": "GFA-FM/COC-002641-BIZN",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/BIZN.kml"
	}, {
		"name": "CтройБизнесГрупп, ООО",
	  	"region": "RU-KOS",
	  	"code": "SBGR",
	 	 "area": 166017,
	  	"type": "FSC",
	  	"number": "",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/SBGR.kml"
	}, {
		"name": "Маркет, ООО",
	  	"region": "RU-SMO",
	  	"code": "MRKT",
	 	 "area": 9159,
	  	"type": "FSC",
	  	"number": "",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/MRKT.kml"
	}, {
		"name": "Еврофанера, ООО",
	  	"region": "RU-SMO",
	  	"code": "EUFA",
	 	 "area": 10969,
	  	"type": "PEFC",
	  	"number": "GFA-FM/COC-500421-EUFA",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/EUFA.kml"
	}, {
		"name": "ИП Романов Ю.М.",
	  	"region": "RU-SMO",
	  	"code": "IROM",
	 	 "area": 13100,
	  	"type": "PEFC",
	  	"number": "",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/IROM.kml"
	} , {
		"name": "ИП Васильков В.А.",
	  	"region": "RU-SMO",
	  	"code": "VSLK",
	 	 "area": 5803,
	  	"type": "PEFC",
	  	"number": "GFA-FM/COC-500421-VSLK",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/VSLK.kml"
	} , {
		"name": "ИП Боровков П.И.",
	  	"region": "RU-SMO",
	  	"code": "BRVK",
	 	  "area": 6718,
	  	"type": "PEFC",
	  	"number": "GFA-FM/COC-500421-BRVK",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/BRVK.kml"
	} , {
		"name": "СП Бетула, ООО",
	  	"region": "RU-SMO",
	  	"code": "BETU",
	 	 "area": 7656,
	  	"type": "PEFC",
	  	"number": "",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/BETU.kml"
	} , {
		"name": "Гранд, ООО",
	  	"region": "RU-SMO",
	  	"code": "GRND",
	 	 "area": 21765,
	  	"type": "FSC",
	  	"number": "GFA-FM/COC-500421-GRND",
	  	"kmlLink": "https://raw.githubusercontent.com/apex-group/apex-group.github.io/master/data/GRND.kml"
	}
];

// Constants
let green = "#20AA4A"
let magneta = "#6CB61C"
let orange = "#FFA500"
let lightGray = "#BBBBBB"

let darkGray = "#555555"
let expandZoom = 6;
let minZoom = 3;
let maxZoom = 11;

// Global variables
var map;
var regions;
var clients;
var selectedClient;
var selectionColor = darkGray;

// Data
/*************************************************************************************************/
function loadRegions(callback) {
    ymaps.borders.load("RU", {lang: "ru", quality: 3}).then(function (geojson) {
    	// Read region names of all clients
    	var regionCodes = [];
		clientsData.forEach(entry => {
			if (regionCodes.indexOf(entry.region) == -1) {
				regionCodes.push(entry.region);
			}
		});

		// Create regions collection with certain properties
		regions = new ymaps.GeoObjectCollection({}, {
			fillColor: green,
			fillOpacity: 0.3
		});
		expandRegions(false);

		// Only add region if it has clients
    	geojson.features.forEach(feature => {
    		if (regionCodes.indexOf(feature.properties.iso3166) > -1) {
    			var geoObject = new ymaps.GeoObject(feature);

    			// Add region meta data
    			console.log("add region ", feature.properties.iso3166);
    			geoObject.options.set('metaData', [feature.properties.iso3166, feature.properties.hintContent]);
	    		regions.add(geoObject);
	    	}
    	});

    	callback();
	});
}

function loadClients(callback) {
	// Called recursively on every client
	function loadClient(callback)
	{
		if (clientsData.length != 0) {
			var clientData = clientsData.pop();
			ymaps.geoXml.load(clientData.kmlLink).then(function (result) {
				var clientCollection = new ymaps.GeoObjectCollection({}, {
					selected: false,
					hasHint: false
				});

				// Assign region name to client
				regions.each(function (region) {
					if (region.options.get('metaData')[0] === clientData.region) {
						clientCollection.options.set('clientRegion', region.options.get('metaData')[1]);
					}
				});

				// Set client specific options
				clientCollection.options.set('clientName',   clientData.name);
				clientCollection.options.set('clientCode',   clientData.code);
				clientCollection.options.set('clientArea',   clientData.area);
				clientCollection.options.set('clientType',   clientData.type);
				clientCollection.options.set('clientNumber', clientData.number);
				updateStyle(clientCollection);

				console.log("add client ", clientData.code);

				// Add to clients collection and proceed
				clientCollection.add(result.geoObjects);
				clients.add(clientCollection);
				loadClient(callback);
			});
		} else {
			callback();
		}
	}

	// Start loading
	clients = new ymaps.GeoObjectCollection({}, {});
	loadClient(callback);
}

// Region controls
/*************************************************************************************************/
function focusRegion(region) {
	// Calculate center point
	let bounds = region.geometry.getBounds();
	let lat = (bounds[0][0] + bounds[1][0]) / 2;
	let long = (bounds[0][1] + bounds[1][1]) / 2;

	map.setCenter([lat, long]);
	map.setZoom(expandZoom);
}

function expandRegions(flag) {
	regions.options.set('fill', 	   flag ? false 		 : true);
	regions.options.set('strokeWidth', flag ? 1 			 : 2);
	regions.options.set('strokeColor', flag ? selectionColor : green);
	if (clients !== undefined) {
		clients.options.set('visible', 	   flag ? true 			 : false);
		clients.options.set('strokeWidth', flag ? 1 			 : 2);
		if (!flag) {
			selectClient(false);
		}
	}
}

// Client controls
/*************************************************************************************************/
function getOriginalColor(client = undefined) {
	if (client === undefined) {
		if (selectedClient === undefined) {
			return;
		}
		client = selectedClient;
	}
	if (client.options.get('clientNumber') === "") {
		return orange;
	} else if (client.options.get('clientType') === "FSC") {
		return green;
	} else if (client.options.get('clientType') === "PEFC") {
		return magneta;
	}
}

function updateStyle(client = undefined) {
	if (client === undefined) {
		if (selectedClient === undefined) {
			return;
		}
		client = selectedClient;
	}
	client.options.set('fillColor',    client.isSelected() ? selectionColor : getOriginalColor(client));
	client.options.set('strokeColor',  client.isSelected() ? selectionColor : getOriginalColor(client));
	client.options.set('strokeWidth',  client.isSelected() ? 2 				: 1);
	client.options.set('fillOpacity',  client.isSelected() ? 0.4 			: 0.3);
}

function updateText(client = undefined) {
	if (client === undefined) {
		if (selectedClient === undefined) {
			return;
		}
		client = selectedClient;
	}
	document.getElementById("code").innerHTML	= client.options.get('clientCode');
	document.getElementById("name").innerHTML	= client.options.get('clientName');
	document.getElementById("region").innerHTML = client.options.get('clientRegion');
	document.getElementById("area").innerHTML 	= "Общая площадь: " + client.options.get('clientArea') + " га";
	let originalColor = getOriginalColor();
	document.getElementById("type").style.color = originalColor;
	document.getElementById("info").style.boxShadow = "5px -10px 50px " + selectionColor;
	let number = client.options.get('clientNumber');
	let clientNumber = (number == "" ? "В процессе подготовки" : number);
	document.getElementById("type").innerHTML   = "Сертификат: " + client.options.get('clientType') + " " + clientNumber;
}

function showBaloon(flag) {
	// Show html container
	flag ? document.getElementById("info").classList.add("expanded")
		 : document.getElementById("info").classList.remove("expanded");
	// Move yandex controls
	var controlsPane = document.getElementsByClassName("ymaps-2-1-72-controls-pane")[0];
	if (controlsPane !== undefined) {
		flag ? controlsPane.classList.add("expanded")
			 : controlsPane.classList.remove("expanded");
	}
}

function selectClient(flag, client = undefined) {
	// Don't deselect undefined client
	if (!flag && selectedClient === undefined) {
		return;
	}
	// Update selected client
	if (client !== undefined) {
		selectedClient = client;
	}
	selectedClient.setSelected(flag,
		// On selection
		function () {
			showBaloon(true);
			updateText();
			updateStyle();
		// On deselection
		}, function () {
			updateStyle();
		// On all deselected
		}, function () {
			if (!selectedClient.isSelected()) {
				showBaloon(false);
			}
		}
	);
}

// Events
/*************************************************************************************************/
function registerMapEvents() {
	map.events.add('boundschange', function (event) {
		expandRegions(event.get('newZoom') >= expandZoom);
	});
	map.events.add('click', function (event) {
		selectClient(false);
	});
	map.events.add('typechange', function (event) {
		selectionColor = (map.getType() == "yandex#map" ? darkGray : lightGray);
		expandRegions(map.getZoom()  >= expandZoom)
		updateStyle();
		updateText();
	});
}

function registerRegionsEvents() {
	regions.events.add('click', function (event) {
		// Click on region outside client boudaries resets it
		if (!regions.options.get('fill')) {
			selectClient(false);
			return;
		}
	    focusRegion(event.get('target'));
	});
	regions.events.add('dblclick', function (event) {
		// Focus region on double click
		if (!regions.options.get('fill')) {
			focusRegion(event.get('target'));
		}
	});
}

function registerClientsEvents() {
	clients.events.add('click', function (event) {
		// Deselect previous if target is not selected
		let clickedClient = event.get('target').getParent();
		if (!clickedClient.isSelected()) {
			selectClient(false);
			map.setBounds(clickedClient.getBounds());
		}

		// Update selected client and flip state
		selectClient(!clickedClient.isSelected(), clickedClient);
	});
}

// Initialization
/*************************************************************************************************/
function init() {
	map = new ymaps.Map("map", {
        center: [61.296861, 73.499799],
        zoom: 4,
        controls: []
    }, {
    	// maxZoom: maxZoom,
        minZoom: minZoom,
        suppressMapOpenBlock: true
    });
	map.container.fitToViewport();
	map.controls.add('rulerControl', { float: 'none', position: {top: 10, right: 110} });
	map.controls.add('typeSelector', { float: 'none', position: {top: 10, right: 10} });
	map.behaviors.disable('dblClickZoom');

	loadRegions(function () {
		loadClients(function () {
			regions.options.set('fill', true);
			clients.options.set('visible', false);

			map.geoObjects.add(regions);
			map.geoObjects.add(clients);
			map.setBounds(regions.getBounds());

			registerMapEvents();
			registerRegionsEvents();
			registerClientsEvents();
		});
	});
}

ymaps.ready(function () {
	// Extend collections with selection logic
	ymaps.GeoObjectCollection.prototype.setSelected = function (flag, onSelected, onDeselected, onAllDeselected) {
		this.options.set('selected', flag);
		onAllDeselected();
		flag ? onSelected()
			 : onDeselected();
	};
	ymaps.GeoObjectCollection.prototype.isSelected = function () {
		return this.options.get('selected');
	};

	// Start
	init();
});
