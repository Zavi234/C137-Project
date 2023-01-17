object=[]
status=""

function preload()
{

}

function setup()
{
   canvas= createCanvas(400,400)
   canvas.position(475,250)
   
   video= createCapture(VIDEO)
   video.hide()
}
function draw()
{
   image(0,0,400,400)

   if(status!="")
   {
      loadModel.detect(video,gotresult)

      for(i=0; i< object.length; i++)
      {
         text()
      }
   }
}

function start()
{
   loadModel= ml5.objectDetector("cocossd",modelLoaded)
   document.getElementById("status").innerHTML="Detecting objects"
   objectName= document.getElementById("input_name").value
}

function modelLoaded()
{
   console.log("Model has loaded")
   status=true
}

function gotresult(error,result)
{
   if(error)
   {
      console.error(error)
   }

   else
   {
      console.log(result)
      object=result
   }
}