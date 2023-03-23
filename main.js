function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);

    poseNet.on("pose" , gotposes);
}
function modelLoaded(){
    console.log("Pose net has been initialized");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
    }
}