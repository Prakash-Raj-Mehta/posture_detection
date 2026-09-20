// let hakla_img;
let capture;
let posenet ;
let singlePose,skeleton;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let specs,smoke;

function setup(){
    createCanvas(800,500);
    capture = createCapture(VIDEO);
    capture.size(800,500);
    capture.hide();
    posenet = ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',receivedPoses)
    specs =loadImage('images/gg.png')
    smoke =loadImage('images/smoke.png')
    // console.log('Setup function');
}
function receivedPoses(poses){
    console.log(poses);
    if (poses.length >0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;

        // noseX=singlePose.nose.x;
        // noseY = singlePose.nose.y;

        // reyeX=singlePose.rightEye.x;
        // reyeY = singlePose.rightEye.y;

        // leyeX=singlePose.leftEye.x;
        // leyeY = singlePose.leftEye.y;

        // noseX=singlePose.nose.x;
        // noseY = singlePose.nose.y;
        

    }
    console.log(noseX + " "+ noseY);
}
function modelLoaded(){
    console.log("model has loaded");
}
// function getRandomArbitrary(min,max){
//     return Math.random()*(max -min)+min;
// }s



function draw(){
    // background(0);
    image(capture,0,0,800,600);
    fill (255,0,0);
    if(singlePose){
        for(let i =0;  i<singlePose.keypoints.length;i++){
        ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y,10);}
        stroke (255,0,0)
        for (let j =0;j<skeleton.length;j++ ){
        line (skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y)
    
    }
    image(specs,singlePose.nose.x-95,singlePose.nose.y-100,200,200);
    image(smoke,singlePose.nose.x+10,singlePose.nose.y+90,100,100);
    }
    
    // 

    // ellipse(leyeX,leyeY,30,30);
    // image(capture, 0, 0, 800, 500);

    // if (singlePose) {

    //     fill(255, 0, 0);

    //     ellipse(reyeX, reyeY, 30, 30);
    //     ellipse(leyeX, leyeY, 30, 30);

    //     ellipse(noseX, noseY, 30, 30);
    // }

    // // ellipse(noseX,noseY,30,30);

    
    // image(hakla,mouseX,mouseY,100,100)
    // r = getRandomArbitrary(0,255);
    // g =getRandomArbitrary(0,255);
    // b = getRandomArbitrary(0,255);
    // fill(r,g,b);
    // ellipse(mouseX,mouseY,50,50);
    // background(200);
    // fill(132,100,32,100);
    // stroke(255,0,0,255);
    // strokeWeight(5);
    // ellipse(100,200,100,100);
    // stroke(0,255,0);
    // ellipse(250,200,100,100);
    // ellipse(400,200,100,100);
    // ellipse(550,200,100,100);
    // ellipse(700,200,100,100);
    //nn
}