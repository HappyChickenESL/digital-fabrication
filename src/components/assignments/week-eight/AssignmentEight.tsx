export default function AssignmentEight() {
  return (
    <div className="w-[50vw]">
      <h1 className="mt-0!">=============================</h1>
      <div className="text-3xl">Electronics Design</div>
      <h1 className="mt-0! mb-8">=============================</h1>
      <h1 className="">=========KiCad Files=========</h1>
      <div className="flex flex-col">
        <a
          className="text-xl"
          href="/week-eight/seven-segment.kicad_sch"
          download={true}
        >
          Download Schematic
        </a>
        <a
          className="text-xl"
          href="/week-eight/seven-segment.kicad_pcb"
          download={true}
        >
          Download PCB Design
        </a>
      </div>
      <h1 className="mt-0! mb-8">=============================</h1>
      <div>
        After producing a board last week, which Ahmed designed already, this
        week is about creating our own design for the final project.
      </div>
      <h1>General</h1>
      <div>
        To design the board, we are using KiCad, which is an open free-to-use
        software. There are 2 import editors here. One for the schematic file
        and another for the design of the pcb (layout/ wiring). First about the
        Schematic Editor:
      </div>
      <h1>Schematic</h1>
      <div>
        Note: Sadly my schematic file got corrupted/ I lost it, so I had to redo
        it.
      </div>
      <div>
        My schematic is highly based on the one we created in class as the
        tutorial. I removed the extra GND and VCC pin headers because I thought
        I didnt need them (it made stuff a bit trickier..). For my final project
        I have 2 external "devices", which I have to communicate to. These being
        an addressable LED strip (
        <a href="https://www.reichelt.de/de/de/shop/produkt/led-streifen_digital_rgb_150_leds_5_m_ws2812b-260970">
          Link
        </a>
        ) and a programmable wifi module (
        <a href="https://www.reichelt.com/de/en/shop/product/developer_boards_esp8266_wi-fi_module-192142">
          Link
        </a>
        ). According to the datasheets of the two I needed following pin
        Headers: 1x03 with GND, VCC and DATA PIN for the LED strip and 2x04 with
        TXD, RXD, 1x GND and 3x VCC for the wifi module. I added these to my
        schematic right away:
      </div>
      <img src="/week-eight/basic-schematic.png"></img>
      <div>My full schematic ended up looking like this then:</div>
      <img src="/week-eight/full-schematic.png"></img>
      <h1>PCB Design</h1>
      <div>
        The second step is to assign footprints to the components and do the
        layout/ wiring in the pcb editor. You can automatically copy all the
        components from the schematic editor to the pcb editor. After that you
        need to wire them correctly, do a proper layout, potentially change
        thickness of the tracks etc.. Its also important to look at possible GND
        islands (like I have here in the top left).
      </div>
      <img src="/week-eight/pcb-editor.png"></img>
      <div>
        After doing all of this, I milled the board again and soldered
        everything together. You can also export a list of components in the pcb
        editor as csv.
      </div>
      <img src="/week-eight/list-of-items.png"></img>
    </div>
  );
}
