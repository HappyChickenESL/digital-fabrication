export default function AssignmentSeven() {
  return (
    <div className="w-[50vw]">
      <h1 className="mt-0">=============================</h1>
      <div className="text-3xl">Printed Circuit Boards</div>
      <h1 className="mt-0 mb-8">=============================</h1>
      <div>
        This exercise consists of two parts. First, we need to mill the board.
        After that, I will be soldering the parts ontop of the board.
      </div>
      <h1>Milling the Board</h1>
      <div>
        To mill the boards, we used the other milling machine. The procedure
        goes as followed:
      </div>
      <ol>
        <li>
          1. Check the air pressure of the machine. Needs to be at least 6bar
        </li>
        <li>3. Use the correct template</li>
        <li>4. Import all of the files</li>
        <li>
          5. Check the settings. First, check the layers. Hide all empty and
          change the unknown to milling. Furthermore adjust material thickness
          and copper layer to 35. Select the correct tools. fiducials are also
          important so the machine can reorient after flipping the board.
        </li>
        <li>
          6. Mount the board in the machine. It needs to be placed within a
          certain spot inbetween the tools but this can be seen in the software
          later aswell. Fixate it with some tape, so it doesnt move. Its also
          really important that there isnt any debris under the board or the
          tool might get damaged because the board is misaligned ever so
          slightly.
        </li>
      </ol>
      <div>
        But I would have to make sure that I get everything right about this,
        since im not quite sure and definitely missed some info.
      </div>
      <div>After milling, I was left with a board, which looked like this:</div>
      <img src="/week-seven/only-board.png"></img>
      <h1>Soldering the Board</h1>
      <div>
        The first step here is to get all the parts which are necessary. For
        this, check the board layout, write down all the components on a piece
        of paper and add a piece of double-sided tape. Now, we get all the
        components and press them on the tape so we dont lose them by accident.
      </div>
      <img width={500} src="/week-seven/pcb-components.jpg"></img>
      <div>
        Now the soldering can begin. First, get soldering tin, and turn the
        machine on. Should be about 370C usually. I started by first soldering
        the capacitors, resistors and LEDs, since these are rather easy. Dont
        apply too much solder but also not too little. Capacitors and Resistors
        are not polarized, so it does not matter in what orientation we place
        them. For the LEDs its very much important. We can check the VCC pin on
        the datasheet of the micro controller. Then we know part of the circuit
        board will be positive and which will be negative. We can also check the
        polarization of the LEDs by using the diode functionality of a
        multimeter. The LED will shine when we get the plus and minus correctly.
        Some solder was also applied to the "USB port" of the PCB. One special
        part was the female 1x6 connector. I struggled with this a bit because I
        accidentally soldered it in-place, but it wasnt tucked in all the way.
        This left me with this uneven connection
      </div>
      <img src="/week-seven/uneven-connector.png"></img>
      <div>
        At the end, the micro controller itself had to be soldered on the board,
        which was the hardest task. I did the following: I applied some flux on
        the board so I can stick the micro controller on top of it to prevent it
        a bit from moving too much. Getting the placement right is crucial but
        also really difficult, but I eventually got it. I then soldered it on
        one spot so it doesnt move too much. After that I applied a ton of
        solder on the opposite side, overflowing the room between the pins. I
        repeated this on the other side. At that point it looked like this:
      </div>
      <img src="/week-seven/micro-controller.png"></img>
      <div>
        Now I used the copper band, I held it down ontop of one side of all pins
        with the soldering iron for 5-10 seconds. Then I applied some solder
        again, which seemed counterproductive. I was then able to remove the
        copper band easily and so did the solder come with it. Only connecting
        each pin to the board individually. This took a lot of time and many
        attempts but worked out in the end. Everything worked at the end, this
        was the final result:
      </div>
      <img src="/week-seven/finished-pcb.jpg"></img>
    </div>
  );
}
