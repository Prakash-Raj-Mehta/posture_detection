let capture;
// let capture;
let posenet ;
let singlePose;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;

function setup() {
    createCanvas(800, 500);

    capture = createCapture(VIDEO);

    capture.size(800, 500);

    capture.hide();
    // posenet = ml5.poseNet(capture,modelLoaded);
    // posenet.on('pose',receivedPoses)
}
function receivedPoses(poses){
    // console.log(poses);
    // if (poses.length >0){
    //     singlePose = poses[0].pose;
    //     noseX=singlePose.nose.x;
    //     noseY = singlePose.nose.y;

    //     reyeX=singlePose.rightEye.x;
    //     reyeY = singlePose.rightEye.y;

    //     leyeX=singlePose.leftEye.x;
    //     leyeY = singlePose.leftEye.y;

        // noseX=singlePose.nose.x;
        // noseY = singlePose.nose.y;
        

    // }
    console.log(noseX + " "+ noseY);
}
function draw() {
    image(capture, 0, 0, width, height);
}