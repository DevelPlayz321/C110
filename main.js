var prediction_1 =  '';
var prediction_2 = '';

Webcam.set({
    height: 350,
    width:300,
    image_format: 'png',
    png_quality:30

});

camera = document.getElementById("camera");
Webcam.attach('camera');

function take_Snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log("ml5_version:",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J8DCHzSEK/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model loaded successfully');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = 'The first prediction is'+prediction_1;
    speak_data2 = 'the second prediction is'+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}