noseX = 0;
noseY = 0;
left_wristX = 0;
right_wristX = 0;
difference = 0;
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
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        difference = Math.floor(left_wristX - right_wristX);
    }
}
function draw(){
    background("#ff26db");     
    textSize(difference);
    fill("black");
    text("texting",noseX,200);
}