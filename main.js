Webcam.set({

    width: 350,
      height: 300,
      image_format: "png",
      png_quality: 90
  });
  camera = document.getElementById("camera");
  Webcam.attach(camera);
  function capture(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML = "<img id='spider_man' src= '"+data_uri+"'>" 
      })
  }
  console.log("ml5.version", ml5.version);
  classy = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5rSrYqks-/model.json", model_loaded);
  function model_loaded(){
      console.log("~pink fluffy unicorns dancing on rainbows~");
  }
  function result(){
      classified_image = document.getElementById("spider_man");
      classy.classify(classified_image, gotresult)
  }
  function gotresult(error, result){
  if(error){
  console.log(error)
  }
  else{
      console.log(result)
      document.getElementById("result_emotion_name").innerHTML = result[0].label;
      document.getElementById("result_emotion_name2").innerHTML = result[1].label;
      if(result[0].label == "peace" ){
          document.getElementById("emo_one").innerHTML = "&#9996;";
      }
   if(result[0].label == "noice"){
          document.getElementById("emo_one").innerHTML = "&#128076;";
      }
      if(result[0].label == "cool"){
          document.getElementById("emo_one").innerHTML = "&#129304;";
      }
  
  
  
      if(result[1].label == "peace" ){
          document.getElementById("emo_two").innerHTML = "&#9996;";
      }
      if(result[1].label == "noice"){
          document.getElementById("emo_two").innerHTML = "&#128076;";
          console.log("sad");
      }
      if(result[1].label == "cool"){
          document.getElementById("emo_two").innerHTML = "&#129304;";
      }
  
  }
  }