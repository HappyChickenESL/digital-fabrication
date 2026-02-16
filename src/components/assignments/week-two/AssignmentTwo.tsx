export default function AssignmentTwo() {
  return (
    <div>
      <h1 className="mt-0!">=============================</h1>
      <div className="text-3xl">Fusion Design</div>
      <h1 className="mt-0! mb-8">=============================</h1>
      <h1 className="mt-0">=====Fusion Archive File=====</h1>
      <a className="text-3xl" href="/week-two/7-segment-display-colorized.f3d">
        Download Fusion Archive File
      </a>
      <h1 className="mt-0! mb-8">=============================</h1>
      <h1>1. The Case</h1>
      <div>
        I had a rough idea of what I want my final idea to look like. I started
        to tinker a bit using fusion and these are the steps I did:
      </div>
      <div>
        First, I created two boxes. One for the whole display and the other
        which I would use to cut out the inside of the box
      </div>
      <img src="/week-two/plane.png"></img>
      <div>
        After that, I created a 2d sketch with the 7 segments of the digit. To
        achieve this I drew simple lines with the end connecting to the start. I
        then extruded the shapes and move them onto my "cut out" box
      </div>
      <div className="flex flex-row space-x-2">
        <div>
          <img src="/week-two/segment-sketch.png"></img>
        </div>
        <div className="flex items-center">
          <img
            src="/week-two/segments-extruded.png"
            className="w-[40rem]"
          ></img>
        </div>
      </div>
      <div>
        I followed up by copying the digit 3 more times and aligning it to the
        others. In this step I also added two dots in the form of boxes so I can
        seperate the hours and minutes
      </div>
      <div className="flex flex-row space-x-2">
        <div>
          <img src="/week-two/full-cutout-body.png"></img>
        </div>
      </div>
      <div>
        After using the combine method on the two boxes, I was left with the
        "shell" of my display. What I had to add next, were LED-tunnels, so the
        LEDs dont shine through other segments.
      </div>
      <div>
        I achieved this by using my digit shape from earlier and copying it. I
        then added a small offset to the copied version. I extruded the bottom
        and top of the original digit shape so it would cut out the top and
        bottom completely. Then I combined them again with the cut out option
        and got the following result:
      </div>
      <div className="flex flex-row space-x-2">
        <div>
          <img src="/week-two/digit-walls.png"></img>
        </div>
      </div>
      <div>
        I translated this shape to the correct position and copied it 3 more
        times so I had it for every digit. I repeated this for the dots
      </div>
      <div className="flex flex-row space-x-2">
        <div>
          <img src="/week-two/part-one-complete.png"></img>
        </div>
      </div>
      <h1>2. The LED Board</h1>
      <div>
        I created another box, that has the same length and width of the first
        box. I then prototyped an example stripped LED strip
      </div>
      <div className="flex flex-row space-x-2">
        <div>
          <img src="/week-two/LED-part.png"></img>
        </div>
      </div>
      <div>
        I aligned them with the holes which I made earlier and repeated them for
        all segments as well as all segments
      </div>
      <div className="flex flex-row space-x-2">
        <div>
          <img src="/week-two/LED-board.png"></img>
        </div>
      </div>
      <h1>3. Final Prototype</h1>
      <div>
        After combining all pieces, I added a wood style to the prototype and
        this is what I ended up with:
      </div>
      <div className="flex flex-row space-x-2">
        <div>
          <img src="/week-two/final-colorized.png"></img>
        </div>
      </div>
    </div>
  );
}
