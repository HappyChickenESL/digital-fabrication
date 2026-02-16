export default function AssigmentFour() {
  return (
    <div>
      <h1 className="mt-0!">=============================</h1>
      <div className="text-3xl">Lasercutting</div>
      <h1 className="mt-0! mb-8">=============================</h1>
      <h1 className="mt-0">=====Fusion Archive File=====</h1>
      <a className="text-3xl" href="/week-four/car-cupholder.f3d">
        Download Fusion Archive File
      </a>
      <h1 className="mt-0! mb-8">=============================</h1>
      <h1>Idea</h1>
      <div>
        My idea is to create a cup holder for my car, since my car doesnt have
        one and its always super annoying when im drinking out of a can and im
        scared that it might trip.
      </div>
      <h1>Measurements</h1>
      <div>
        these are the measurements of a standard 250ml redbull can
        <ul>
          <li>Diameter: 66mm</li>
          <li>height: 122mm</li>
        </ul>
      </div>
      <h1>Parts</h1>
      <div>
        I chose to split my idea into 3 parts. A circular base, a bendable wall
        part and a tower. I want to press fit the tower ontop of the base, so it
        helps aligning the wall and connect the wall to the plate. To have some
        offset to the can itself, I chose a diameter of 82mm for the circular
        base.
        <ul>
          <li>
            Length of flattened wall: pi*diameter = 3.1416*82mm = 257.61mm
          </li>
        </ul>
      </div>
      <h1>Modeling in Fusion</h1>
      <div>
        I started by selecting my desired pattern from:
        https://www.troteclaser.com/en/helpcenter/materials/application-techniques/bending-technique.
        I chose Kerf 2: Small waves and downloaded the zip file containing a
        .cdr file for all kerfs. I then imported the file into an svg editor, in
        this case inkscape. This was what I imported:
      </div>
      <img src="/week-four/svg-editor.png"></img>
      <div>
        I then made sure that I had the correct units in the project settings
        and exported it as svg, before importing it into fusion. In Fusion I
        first removed the top part and then continued the pattern until I had
        the desired length of 247.61mm. I noticed that the surface wasnt correct
        and had to fix it manually by deleting the lines and reconnecting them
        properly. I then added a rectangle with a length of 5mm on both sides,
        one side having a slit and the other having the joint. (The color of the
        image is really weird, if I zoom in it looks completely fine)
      </div>
      <img src="/week-four/bend-finished.png"></img>
      <h1>Kerf</h1>
      <div>
        From the previous lesson, we learned that 0.15mm kerf seems to work
        really well. This kerf being half the diameter of the laser, which would
        be 0.3mm. However, I didnt do it exactly like we did in the lesson, I
        first added the kerf parameter so I could change it easily afterwards. I
        then created the boxes for the slits/ joints and simultaneously added/
        subtracted the kerf/ double the kerf to the width/ length of the boxes.
        This was a lot more work in the end, which made me realise that it
        wouldve been a lot easier if I did it as we practiced in the lesson.
      </div>
      <img src="/week-four/measure-joint.png"></img>
      <div>
        Here you can see the measurements of my slits/ joints. Its a bit
        confusing, but made sense in my head.
      </div>
      <img src="/week-four/measure-slit.png"></img>
      <div>I then modeled the circular base plate as followed:</div>
      <div>
        The inner circle is just a helper to show where the bended walls would
        go along. the outer circle has a total diameter of 90mm to fit nicely
        into the car so it doesnt move a lot. I also added the 2 rectangles on
        the left with a width and length of 3mm. no kerf, since others suggested
        that.
      </div>
      <img src="/week-four/base.png"></img>
      <div>And the same applies to the tower</div>
      <img src="/week-four/tower.png"></img>
      <h1>Lasercutting</h1>
      <div>
        In the fablab I cut the design using the ~3mm mdf. I exported the
        sketches in fusion as xdf, which I then imported in rhino. The
        configurations for rhino looked like this:
      </div>
      <img src="/week-four/rhino.jpg"></img>
      <div>
        I aligned all the sketches so they wouldnt take up a lot of space. I
        then added a small engraving text. I hit CTRL+p to print, however I had
        to rearrange the view box, because the top was cut off. I also changed
        the display color of the text to red
      </div>
      <img src="/week-four/epilog.jpg"></img>
      <div>
        In the epilog software I first changed the process type of everything
        other than the engraving to vector, which also made it easier to see. I
        then moved it to the top of the view, so I wouldnt waste any material.
        The MDF Engraving I changed to 50% power so I would get the desired
        engraving. I then pressed print.
      </div>
      <h1>The machine</h1>
      Since others were already cutting before me, I knew the head was adjusted
      to the bed. I only had to jog to make it start at the right point of the
      MDF plate. I saw that my job was displayed on the interface. I turned on
      the air assist, as well as the fume filter and started the job. It took
      about 10/12mins to finish. I was able to bend the walls just the way I
      wanted. I was also able to join the towers into the base plate but sadly
      the wall wouldnt join itself, maybe with enough force but I didnt want to
      break it.
      <h1>Finished images</h1>
      <img src="/week-four/base-with-tower.jpg"></img>
      <img src="/week-four/wall-long.jpg"></img>
      <img src="/week-four/bended.jpg"></img>
      <h1>Learning</h1>
      <div>
        Sadly my idea did not work because of two reasons. First, the joints
        weren't strong enough to support the whole body. I was able to fit them
        into the holes with some pressure. I think the fit was really okay but
        the way I built the joints, they were meant to break. The second problem
        was, that when sticking the joints together, the flexible wall
        semi-ripped. Leaving me with this uneven structure which can be seen in
        the last image. I ended up really liking the idea, however I had to
        rethink the joints in order to make this possible.
      </div>
    </div>
  );
}
