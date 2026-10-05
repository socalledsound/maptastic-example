// 2. Define your p5 Sketch using Instance Mode syntax (passing 'p')
    const sketch1 = (p) => {
        let img
      p.setup = async () => {
        img = await p.loadImage('cute.png');
        
        // Create canvas inside the specified element size
        let canvas = p.createCanvas(300, 300);
        
        // Give your canvas element a specific ID so Maptastic can find it
        canvas.id('p5-canvas1');
        
        p.background(0);
        
        // 3. Initialize Maptastic once the canvas element exists in the DOM
        //Maptastic('p5-canvas1');
        Maptastic('p5-canvas1');
      };

      p.draw = () => {
        p.background(0, 10); // leave trails
        p.image(img, 0, 0, p.width, p.height);
        // Example dynamic visuals
        p.fill(p.random(255), p.random(255), 255);
        p.noStroke();
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
        
        p.stroke(255);
        p.noFill();
        p.rect(10, 10, p.width - 20, p.height - 20);
      };
      
    };

    const sketch2 = (p) => {
        let img
      p.setup = async () => {
        img = await p.loadImage('computing.png');
        let canvas2 = p.createCanvas(300, 300);
        canvas2.id('p5-canvas2');
        //p.background(0,200,0);
        Maptastic('p5-canvas2');
      };

      p.draw = () => {
        p.background(0);
        p.image(img, 0, 0, p.width, p.height);
      };
    };

    // 4. Instantiate the p5 sketch into your container element
    const myP5Instance1 = new p5(sketch1, 'left-side');
    const myP5Instance2 = new p5(sketch2, 'right-side');