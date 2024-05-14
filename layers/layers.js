var wms_layers = [];

var format_Precincts_0 = new ol.format.GeoJSON();
var features_Precincts_0 = format_Precincts_0.readFeatures(json_Precincts_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Precincts_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Precincts_0.addFeatures(features_Precincts_0);
var lyr_Precincts_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Precincts_0, 
                style: style_Precincts_0,
                popuplayertitle: "Precincts",
                interactive: true,
    title: 'Precincts<br />\
    <img src="styles/legend/Precincts_0_0.png" /> 1<br />\
    <img src="styles/legend/Precincts_0_1.png" /> 2<br />\
    <img src="styles/legend/Precincts_0_2.png" /> 3<br />\
    <img src="styles/legend/Precincts_0_3.png" /> 4<br />\
    <img src="styles/legend/Precincts_0_4.png" /> 5<br />\
    <img src="styles/legend/Precincts_0_5.png" /> 6<br />'
        });
var format_Links_1 = new ol.format.GeoJSON();
var features_Links_1 = format_Links_1.readFeatures(json_Links_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Links_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Links_1.addFeatures(features_Links_1);
var lyr_Links_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Links_1, 
                style: style_Links_1,
                popuplayertitle: "Links",
                interactive: true,
                title: '<img src="styles/legend/Links_1.png" /> Links'
            });
var format_Captains_2 = new ol.format.GeoJSON();
var features_Captains_2 = format_Captains_2.readFeatures(json_Captains_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Captains_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Captains_2.addFeatures(features_Captains_2);
var lyr_Captains_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Captains_2, 
                style: style_Captains_2,
                popuplayertitle: "Captains",
                interactive: true,
                title: '<img src="styles/legend/Captains_2.png" /> Captains'
            });

lyr_Precincts_0.setVisible(true);lyr_Links_1.setVisible(true);lyr_Captains_2.setVisible(true);
var layersList = [lyr_Precincts_0,lyr_Links_1,lyr_Captains_2];
lyr_Precincts_0.set('fieldAliases', {'Precinct': 'Precinct', 'NAME': 'NAME', 'CtyPrec': 'CtyPrec', 'Location': 'Location', 'NotRetd': 'NotRetd', 'DEM': 'DEM', 'OTH': 'OTH', 'REP': 'REP', 'TTL': 'TTL', 'DEMPct': 'DEMPct', 'REPPct': 'REPPct', 'OTHPct': 'OTHPct', 'DEMtoREPPc': 'DEMtoREPPc', 'HasCaptain': 'HasCaptain', 'HasLink': 'HasLink', 'GrandTotal': 'GrandTotal', 'PrecinctNu': 'PrecinctNu', 'GrandTota1': 'GrandTota1', 'DEMVBMYes': 'DEMVBMYes', 'AvgAge': 'AvgAge', 'TotalPeopl': 'TotalPeopl', '2022Turnou': '2022Turnou', '2022Turno1': '2022Turno1', 'Style': 'Style', 'ColorField': 'ColorField', 'DEMS': 'DEMS', 'NoCode': 'NoCode', 'NotCoded': 'NotCoded', 'AvgDistanc': 'AvgDistanc', 'Orient': 'Orient', 'color_id': 'color_id', });
lyr_Links_1.set('fieldAliases', {'Address': 'Address', 'LastName': 'LastName', 'FirstName': 'FirstName', 'Precinct': 'Precinct', 'VoterID': 'VoterID', 'Type': 'Type', 'Village': 'Village', 'VoterID2': 'VoterID2', 'Style': 'Style', 'Links': 'Links', });
lyr_Captains_2.set('fieldAliases', {'VoterID': 'VoterID', 'Captains': 'Captains', 'ADDRESS': 'ADDRESS', 'BIRTHDATE': 'BIRTHDATE', 'LastName': 'LastName', 'Precinct': 'Precinct', 'Style': 'Style', 'DisplayNam': 'DisplayNam', });
lyr_Precincts_0.set('fieldImages', {'Precinct': 'TextEdit', 'NAME': 'TextEdit', 'CtyPrec': 'TextEdit', 'Location': 'TextEdit', 'NotRetd': 'TextEdit', 'DEM': 'TextEdit', 'OTH': 'TextEdit', 'REP': 'TextEdit', 'TTL': 'TextEdit', 'DEMPct': 'TextEdit', 'REPPct': 'TextEdit', 'OTHPct': 'TextEdit', 'DEMtoREPPc': 'TextEdit', 'HasCaptain': 'TextEdit', 'HasLink': 'TextEdit', 'GrandTotal': 'TextEdit', 'PrecinctNu': 'TextEdit', 'GrandTota1': 'TextEdit', 'DEMVBMYes': 'TextEdit', 'AvgAge': 'TextEdit', 'TotalPeopl': 'TextEdit', '2022Turnou': 'TextEdit', '2022Turno1': 'TextEdit', 'Style': 'TextEdit', 'ColorField': 'TextEdit', 'DEMS': 'TextEdit', 'NoCode': 'TextEdit', 'NotCoded': 'TextEdit', 'AvgDistanc': 'TextEdit', 'Orient': 'TextEdit', 'color_id': 'Range', });
lyr_Links_1.set('fieldImages', {'Address': 'TextEdit', 'LastName': 'TextEdit', 'FirstName': 'TextEdit', 'Precinct': 'TextEdit', 'VoterID': 'TextEdit', 'Type': 'TextEdit', 'Village': 'TextEdit', 'VoterID2': 'TextEdit', 'Style': 'TextEdit', 'Links': 'TextEdit', });
lyr_Captains_2.set('fieldImages', {'VoterID': 'TextEdit', 'Captains': 'TextEdit', 'ADDRESS': 'TextEdit', 'BIRTHDATE': 'DateTime', 'LastName': 'TextEdit', 'Precinct': 'TextEdit', 'Style': 'TextEdit', 'DisplayNam': 'TextEdit', });
lyr_Precincts_0.set('fieldLabels', {'Precinct': 'inline label - always visible', 'NAME': 'hidden field', 'CtyPrec': 'hidden field', 'Location': 'hidden field', 'NotRetd': 'hidden field', 'DEM': 'hidden field', 'OTH': 'hidden field', 'REP': 'hidden field', 'TTL': 'hidden field', 'DEMPct': 'hidden field', 'REPPct': 'hidden field', 'OTHPct': 'hidden field', 'DEMtoREPPc': 'hidden field', 'HasCaptain': 'hidden field', 'HasLink': 'hidden field', 'GrandTotal': 'hidden field', 'PrecinctNu': 'hidden field', 'GrandTota1': 'hidden field', 'DEMVBMYes': 'hidden field', 'AvgAge': 'hidden field', 'TotalPeopl': 'hidden field', '2022Turnou': 'hidden field', '2022Turno1': 'hidden field', 'Style': 'hidden field', 'ColorField': 'hidden field', 'DEMS': 'hidden field', 'NoCode': 'hidden field', 'NotCoded': 'hidden field', 'AvgDistanc': 'hidden field', 'Orient': 'hidden field', 'color_id': 'hidden field', });
lyr_Links_1.set('fieldLabels', {'Address': 'hidden field', 'LastName': 'inline label - always visible', 'FirstName': 'inline label - always visible', 'Precinct': 'hidden field', 'VoterID': 'hidden field', 'Type': 'hidden field', 'Village': 'inline label - always visible', 'VoterID2': 'hidden field', 'Style': 'hidden field', 'Links': 'hidden field', });
lyr_Captains_2.set('fieldLabels', {'VoterID': 'hidden field', 'Captains': 'inline label - always visible', 'ADDRESS': 'hidden field', 'BIRTHDATE': 'hidden field', 'LastName': 'no label', 'Precinct': 'hidden field', 'Style': 'hidden field', 'DisplayNam': 'inline label - always visible', });
lyr_Captains_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});