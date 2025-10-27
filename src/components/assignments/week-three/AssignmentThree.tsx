import { Link } from "@tanstack/react-router";

export default function AssigmentThree() {
  return (
    <div>
      <h1>Goal of this exercise</h1>
      <div>
        This exercise is about 3d-printing something that either cannot be done
        with subtractive methods or isnt beneficial, since that is exactly the
        application of 3d-printing.
      </div>
      <h1>Subtractive Fabrication</h1>
      <div>
        Subtractive methods in this case means that you have a block of
        something like a metal or wood and remove parts of it to finish with the
        thing u want to design. A typical example of this would be cnc mill.
      </div>
      <h1>Additive Fabrication</h1>
      <div>
        Additive methods are where you create something with material. An
        example of this would be 3d-printing where you have the filament that
        gets heated up and shapes the object u want to end up with.
      </div>
      <h1>Exercise</h1>
      <div>
        I hadnt come up with something cool that I wanted to print, therefore I
        will think about this more and come up with another idea.
      </div>
      <div>
        As of now I, I printed my fusion design from
        <Link to="/assignments/two"> Last Week</Link> in a smaller scale. I
        think it serves the purposes at least a bit because subtractive methods
        would waste a lot of resources in this case. These are the steps I
        followed:
      </div>
      <h1>Importing in Bambu Studio</h1>
      <div>
        The designs need to be converted to instructions that are readable for
        the printers, also called machine code/ gcode. The first step is to
        export the fusion file as an .stl file, which can then be imported in
        Bambu Studio. When working with other printer models, there is often
        other software for example Ultimaker Cura.
      </div>
      <img src="/week-three/bambu-studio-import.png"></img>
      <h1>Preparing to Slice</h1>
      <div>
        After importing, I changed the orientation of the object, so I need as
        little support as possible, in this case none. I also shrunk it down to
        reduce the print time. I was left with this 45.5 x 21 x 7 mm display,
        which was flipped upside down.
      </div>
      <img src="/week-three/scaled.png"></img>
      <h1>Settings</h1>
      <div>
        There are many different settings with varying importance. Its crucial
        to select the correct printer model, as well as filament type. Other
        settings include support structure layout, positioning of the seam,
        strength of walls, which includes interior design and more. Most of them
        didnt have to be adjusted in this example. After slicing the plate,
        these are the results of bambu studio, which I used to print
        <img src="/week-three/slicer.png"></img>
      </div>
    </div>
  );
}
