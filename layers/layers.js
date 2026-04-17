var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Prov_05ans_1 = new ol.format.GeoJSON();
var features_Prov_05ans_1 = format_Prov_05ans_1.readFeatures(json_Prov_05ans_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prov_05ans_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prov_05ans_1.addFeatures(features_Prov_05ans_1);
var lyr_Prov_05ans_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prov_05ans_1, 
                style: style_Prov_05ans_1,
                popuplayertitle: 'Prov_0à5ans',
                interactive: true,
    title: 'Prov_0à5ans<br />\
    <img src="styles/legend/Prov_05ans_1_0.png" /> 20010 - 97925<br />\
    <img src="styles/legend/Prov_05ans_1_1.png" /> 97925 - 175839<br />\
    <img src="styles/legend/Prov_05ans_1_2.png" /> 175839 - 253754<br />\
    <img src="styles/legend/Prov_05ans_1_3.png" /> 253754 - 331669<br />\
    <img src="styles/legend/Prov_05ans_1_4.png" /> 331669 - 409583<br />\
    <img src="styles/legend/Prov_05ans_1_5.png" /> 409583 - 487498<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Prov_05ans_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Prov_05ans_1];
lyr_Prov_05ans_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_2': 'NAME_2', 'POP_0a5ans': 'POP_0a5ans', 'Population': 'Population', });
lyr_Prov_05ans_1.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_2': 'TextEdit', 'POP_0a5ans': 'TextEdit', 'Population': 'Range', });
lyr_Prov_05ans_1.set('fieldLabels', {'COUNTRY': 'hidden field', 'NAME_2': 'inline label - always visible', 'POP_0a5ans': 'no label', 'Population': 'inline label - always visible', });
lyr_Prov_05ans_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});