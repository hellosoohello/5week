let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(720, 400);
  stroke(255);

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height / 2;
}

function draw() {


    // // Set the background color 
    // background(220); 
      
    // // Initialize the parameter with day 
    // let d = day(); 
      
    // // Set the size of text 
    // textSize(16); 
  
    // // Set the text color 
    // fill(color('red')); 
      
    // // Display result 
    // text("Today's date is : " + d, 50, 30); 

    // let n = month();

    // text("Today's date is : " + n, 150, 230); 

    // for(let a = 0; a < month(); a += 1)
    // {      
    //   i = a * 10 + 10;
    //   ellipse(100 + i, 100 + i, 20, 20);
    // }

    // let a = minute();
    
    // text("Today's minute is : " + a, 250, 130); 
    // Date.now();

    // //let h = Date.now();

    // text("Today's now is : " + h, 30, 130); 

    // let nn = Date.now().toString();

    // text("Today's eneeeow is : " + nn, 10, 10); 

      background(253, 253, 150);
    
      // Draw the clock background
     /* noStroke();
      fill(244, 122, 158);
      ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
      fill(237, 34, 93);
      ellipse(cx, cy, clockDiameter, clockDiameter);
    
      // Angles for sin() and cos() start at 3 o'clock;
      // subtract HALF_PI to make them start at the top
      let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
      let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
      let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
    
      // Draw the hands of the clock
      stroke(255);
      strokeWeight(1);
      line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
      strokeWeight(2);
      line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
      strokeWeight(4);
      line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);*/

      //noStroke();
     // strokeWeight(1);
  
      for(let a = 0; a < month(); a += 1)
     {      
        i = a * 30 + 10;
        noStroke();
        fill(128,206,225);
        ellipse(2 + i, 10 + i, 50, 50);
        stroke(25, 40, 50);

       // noStroke();
     }


   //  strokeWeight(1);
     

     for(let a = 1; a < day(); a += 1)
    {      
       i = a * 11 + 20;
       fill(200,206,225);
       ellipse(20 , 80 + i, 20, 20);
    }


     let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
     let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
     let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
     
  
     //strokeWeight(1);

//     stroke(25, 40, 50);
     //strokeWeight(1);
     //line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);

     for(let a = 0; a < second(); a += 1)
     {      
        i = a * 2;
        noStroke();
        fill(225,165,20);
        rect(300, 120, i, i);
     }
    
 
    // rect(200, 20,s + 100,s + 100);



    for(let a = 0; a < minute(); a += 1)
    {      
       i = a * 10;
      // noStroke();
      strokeWeight(2);
      stroke(20,200,100);
       fill(25,15,200);
       rect(i + 210, 40, 30, 30);
    }
   
 
    for(let a = 0; a < hour(); a += 1)
    {      
       i = a * 30;
      // noStroke();
     // strokeWeight(2);
      stroke(200,20,100);
       fill(125,15,200);
       rect(640, 90 + i, 30, 30);
    }

    textSize(20);
    fill(0,0, 0);
    noStroke();
    text('Eun Soo Cho', 10, 360);     
    text('day, month, sec, min, hour', 10, 380); 
   

     strokeWeight(2);
     //line(100, 130, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
     //strokeWeight(4);
    
      // Draw the minute ticks
     // strokeWeight(2);

      noStroke();
      beginShape(POINTS);
      for (let a = 0; a < 360; a += 6) {
        let angle = radians(a);
        let x = cx + cos(angle) * secondsRadius;
        let y = cy + sin(angle) * secondsRadius;
        vertex(x, y);
      }
      endShape();
    }  

