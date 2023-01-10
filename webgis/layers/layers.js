var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.format.GeoJSON();
var features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.readFeatures(json_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.addFeatures(features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0);var lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
                style: style_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,
                title: '<img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0.png" /> [LapakGIS.com] Batas_Kecamatan_BIG_PPBW'
            });

lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0];
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldAliases', {'KODE POS': 'KODE POS', 'KECAMATAN': 'KECAMATAN', 'KOTA': 'KOTA', 'PROVINSI': 'PROVINSI', 'kepadatan 2019': 'kepadatan 2019', 'kepadatan 2020': 'kepadatan 2020', 'kepadatan 2021': 'kepadatan 2021', 'jumlah 2019': 'jumlah 2019', 'jumlah 2020': 'jumlah 2020', 'jumlah 2021': 'jumlah 2021', 'luas 2019': 'luas 2019', 'luas 2020': 'luas 2020', 'luas 2021': 'luas 2021', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldImages', {'KODE POS': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KOTA': 'TextEdit', 'PROVINSI': 'TextEdit', 'kepadatan 2019': 'TextEdit', 'kepadatan 2020': 'TextEdit', 'kepadatan 2021': 'TextEdit', 'jumlah 2019': 'TextEdit', 'jumlah 2020': 'TextEdit', 'jumlah 2021': 'TextEdit', 'luas 2019': 'TextEdit', 'luas 2020': 'TextEdit', 'luas 2021': 'TextEdit', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldLabels', {'KODE POS': 'inline label', 'KECAMATAN': 'inline label', 'KOTA': 'inline label', 'PROVINSI': 'inline label', 'kepadatan 2019': 'inline label', 'kepadatan 2020': 'inline label', 'kepadatan 2021': 'inline label', 'jumlah 2019': 'inline label', 'jumlah 2020': 'inline label', 'jumlah 2021': 'inline label', 'luas 2019': 'inline label', 'luas 2020': 'inline label', 'luas 2021': 'inline label', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});