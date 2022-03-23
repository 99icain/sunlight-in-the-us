ol.proj.proj4.register(proj4);
ol.proj.get("ESRI:102100").setExtent([-14013182.648700, 1627817.875913, -7150145.593332, 7386532.830560]);
var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Daylengthhours_1 = new ol.format.GeoJSON();
var features_Daylengthhours_1 = format_Daylengthhours_1.readFeatures(json_Daylengthhours_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_Daylengthhours_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daylengthhours_1.addFeatures(features_Daylengthhours_1);
var lyr_Daylengthhours_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Daylengthhours_1, 
                style: style_Daylengthhours_1,
                interactive: true,
    title: 'Day length (hours)<br />\
    <img src="styles/legend/Daylengthhours_1_0.png" /> 8.33 - 9.18<br />\
    <img src="styles/legend/Daylengthhours_1_1.png" /> 9.18 - 9.46<br />\
    <img src="styles/legend/Daylengthhours_1_2.png" /> 9.46 - 9.82<br />\
    <img src="styles/legend/Daylengthhours_1_3.png" /> 9.82 - 10.02<br />\
    <img src="styles/legend/Daylengthhours_1_4.png" /> 10.02 - 10.59<br />'
        });

lyr_Positron_0.setVisible(true);lyr_Daylengthhours_1.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Daylengthhours_1];
lyr_Daylengthhours_1.set('fieldAliases', {'city': 'City', 'state_id': 'state_id', 'state_name': 'state_name', 'lat': 'lat', 'lng': 'lng', 'population': 'Population', 'density': 'Population density', 'timezone': 'Tme zone', 'sunrise_lo': 'sunrise_lo', 'sunset_lon': 'sunset_lon', 'sunrise_sh': 'Sunrise', 'sunset_sho': 'Sunset', 'day_length': 'Day length (hours)', 'night_leng': 'night_leng', 'daylight': 'Daylight (hours)', 'max_pop': 'max_pop', 'max_sunset': 'max_sunset', });
lyr_Daylengthhours_1.set('fieldImages', {'city': 'TextEdit', 'state_id': 'Hidden', 'state_name': 'Hidden', 'lat': 'Hidden', 'lng': 'Hidden', 'population': 'Hidden', 'density': 'Hidden', 'timezone': 'TextEdit', 'sunrise_lo': 'Hidden', 'sunset_lon': 'Hidden', 'sunrise_sh': 'TextEdit', 'sunset_sho': 'TextEdit', 'day_length': 'TextEdit', 'night_leng': 'Hidden', 'daylight': 'TextEdit', 'max_pop': 'Hidden', 'max_sunset': 'Hidden', });
lyr_Daylengthhours_1.set('fieldLabels', {'city': 'header label', 'timezone': 'inline label', 'sunrise_sh': 'inline label', 'sunset_sho': 'inline label', 'day_length': 'inline label', 'daylight': 'inline label', });
lyr_Daylengthhours_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});