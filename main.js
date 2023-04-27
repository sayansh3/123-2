function prelaod() {
    
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    
    

    poseNet = ml5.poseNet(video,modleLoaded);
    poseNet.on('pose',gotPoses)
}

function modleLoaded(){
    console.log('Posenet is initialized')
}

function gotPoses(results){
    if (results.length>0)
    {
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
}}

function draw(){
    
}

function take_snapshot(){
    save('myFilterImage.png');

}

