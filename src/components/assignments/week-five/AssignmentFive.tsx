export default function AssigmentFive() {
  return (
    <div>
      <h1 className="mt-0!">=============================</h1>
      <div className="text-3xl">Milling</div>
      <h1 className="mt-0! mb-8">=============================</h1>
      <h1 className="mt-0">=====Fusion Archive File=====</h1>
      <a className="text-3xl" href="/week-five/heart.f3d">
        Download Fusion Archive File
      </a>
      <h1 className="mt-0! mb-8">=============================</h1>
      <h1>Idea</h1>
      <div>
        I didnt really have any idea at first, I opened fusion and tried some
        bodies and forms that looked nice. Eventually I had the idea of a heart.
        Since a full heart obviously wouldnt work because the head of the
        machine couldnt rotate, I thought of making half a heart that sticks out
        of the stock.
      </div>
      <h1>Fusion Design</h1>
      <div>
        I started by creating a form. I split the width into 4 segments and the
        height into 2. I added symmetry for all dimensions. I then shaped the
        form into a heart by dragging either the control points or whole faces.
        At the end I removed half of the heart.
      </div>
      <div></div>
      <img src="/week-five/heart-design.png"></img>
      <h1>Manufacturing</h1>
      <div>
        After I was done designing, I changed to the manufacture tab. Here are
        certain steps we need to complete before we can start milling
      </div>
      <h1>Step 1: Creating a Setup</h1>
      <div>
        The most important details in this step are the following: Select the
        right axis for your design in the Setup tab, as well as the correct
        origin (super important).
      </div>
      <img src="/week-five/setup.png"></img>
      <div>
        In the Stock tab, set the mode to fixed size box and input the stock
        parameters. As we discussed, the dimensions of the stock should be 100mm
        x 80mm x 40mm, but I also measured the piece I used, before I started
        milling. To decrease the time it takes to mill, I placed the model at
        the top of the stock, by changing the z coordinate of the model from
        center to offset from top with 1mm
      </div>
      <img src="/week-five/setup-stock.png"></img>
      <h1>Step 2: Creating the job</h1>
      <div>
        After that its done, we can move on to create the type of process we
        want to do. In this exercise and generally speaking, the task should be
        split into at least 2 jobs/ job stages. first roughing. This is where we
        remove most of the material and create a rough shape. The second stage
        is a lot preciser. For the first job, I created an "Adaptive Clearing"
        job. Since we already added the tool in the lecture, I didnt need to
        change anything about the tool itself, other than select it. In this
        case the 6mm 2 flute flat end mill. In the geometry tab u can select
        which faces u want the machine to work on/ leave out. The other options
        I left as is.
      </div>
      <img src="/week-five/adaptive-clearing.png"></img>
      <div>
        This creates the toolpath, aka the instructions where the machine head
        should move and looks like the following:
      </div>
      <img src="/week-five/toolpath.png"></img>
      <h1>Step 3: Simulation</h1>
      <div>
        In the top beneath "Actions", you can also simulate this process and
        check for collissions. This is really important to verify that there are
        either no collissions or only valid collissions (since we are working
        with foam, collissions may be fine in certain situations).
      </div>
      <img src="/week-five/simulation.png"></img>
      <div>
        Here u can see the simulation process. In the bottom is the timeline of
        the simulation. Any collissions will also be displayed there.
      </div>
      <div>
        I then repeated steps 2 and 3 for the refinement job. A key detail there
        is to change the step-over distance. This is essentially the distance
        that the head moves into a direction when the form is curved (the width
        of each step)
      </div>
      <h1>Result</h1>
      <div>
        This is the final result. First a picture inbetween the first and second
        job. And then a picture of how it looked at the end.{" "}
      </div>
      <img src="/week-five/milling-process.jpg"></img>
      <img src="/week-five/finished.jpg"></img>
    </div>
  );
}
