// ArcGIS API https://www.google.com/search?q=arcgis+rest+api+export+image
let url = "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer/exportImage";
url += "?f=json";
url += "&bbox=-2364615.0,256035.0,2266845.0,3180435.0";
url += "&bboxSR=5070";
url += "&imageSR=5070";
url += "&size=1115,787";
url += "&format=jpgpng";

//funtcions to fetch image data
fetch(url)
    .then(response => response.json())
    .then(jsonData => {
        document.getElementById('map').style.backgroundImage = "url('" + jsonData.href + "')";
        
})