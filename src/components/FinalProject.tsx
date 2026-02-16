import { Link } from "@tanstack/react-router";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function FinalProject() {
  return (
    <div className="w-[50vw]">
      <h1 className="mt-0!">=============================</h1>
      <div className="text-3xl">Final Project</div>
      <h1 className="mt-0!">=============================</h1>
      <h1 className="mt-0!">==========Downloads==========</h1>
      <div>
        <a
          href="/final/digital-fabrication-final-presentation.pdf"
          className="underline text-3xl"
        >
          Download Presentation
        </a>
      </div>
      <a
        href="/final/poster.png"
        className="underline text-3xl"
        download={true}
      >
        Download Poster
      </a>
      <h1 className="mt-0!">=============================</h1>
      <div>
        In this section I will be talking about my final project, the
        seven-segment display.
      </div>
      <h1>The Poster</h1>
      <img src="/final/poster.png"></img>
      <h1>1. The Idea</h1>
      <div>
        The Idea behind the project was a video I had seen some time ago about a
        digital clock which was made out of wood using seven-segment displays
        and could be controlled via a mobile app. I knew right from the start,
        that I wanted to make something useful, this also being the reason why I
        chose this class. I do a lot of gaming and recently decorated my room,
        which I really enjoyed and I knew that a digital clock/ acontrollable
        seven-segment display was the perfect addition. It is a rather simple
        project that involves a decent amount of programming and electronics
        design but since im not too creative, I also would not need to design
        too much. My main inspiration came from this{" "}
        <a
          className="underline"
          href="https://youtu.be/1aNHF5tcTpw?si=0RXDoAz9Q_0u__xe"
        >
          Youtube Video
        </a>
        , alongside many others.
      </div>
      <div className="mt-4">
        So the idea was clear:
        <ol>
          <li>
            1. I wanted to make a display with at least one seven-segment but
            preferably 4
          </li>
          <li>2. It should be out of wood, wood-ish material</li>
          <li>
            3. The clock should automatically fetch the current time from the
            internet and display it on boot
          </li>
          <li>
            4. I want to be able to communicate to the LEDs via a website which
            is hosted locally and change the color and time manually over an
            interface.
          </li>
          <li></li>
        </ol>
      </div>
      <h1>2. First Steps/ Design Choices</h1>
      <div>
        First, I had to figure out how to always have the current time on the
        board and how to communicate to it over wifi/ bluetooth etc.. I ended up
        doing a lot of research and these are the results, which I found out for
        the clock.
      </div>
      <h2>The Clock</h2>
      <div>I had two options here, these being:</div>
      <ol>
        <li>
          1. RTC (Real-Time Clock) Module: This module has a battery, which lets
          it always keep track of the current time, but there might be a minute
          or two of error over the course of each year.
        </li>
        <li>
          2. WiFi Module: A WiFi Module can talk to the internet using a NTP
          Client. NTP is the Network Time Protocol, which is used all over the
          internet to sync times.
        </li>
      </ol>
      <div>
        At this point it was already clear to me that the Wifi module is the
        perfect fit, since I would also need this for my app later on. This
        would however be harder, because its less plug-and-play like the RTC
        module. I need to program the board first and wire it up correctly with
        other challenges, which I will talk about later.
      </div>
      <h2>WiFi Module</h2>
      <div>
        There was not really any design choice being left here. I already relied
        on this for the clock so this was a no brainer. Many modern arduino
        boards/ similar already have a built-in wifi module, which makes it a
        lot easier. However this course was about making everything ourselves,
        which is why I had to connect it myself. I will talk more about this
        later on.
      </div>
      <h2>LED Strip</h2>
      <div>
        The other part I needed for my project was a LED strip. I use the
        ws2812b LED strip because it has some advantages.
        <ol>
          <li>
            1. Its addressable, this means that I only needed one DATA PIN on my
            chip to address enough LEDs and not 1 PIN per LED like older models.
            This makes it a looot easier.
          </li>
          <li>
            2. There is a library inside the Arduino IDE being the
            Adafruit.Neopixel. I already used this in Task 3 of my{" "}
            <Link className=" underline" to="/assignments/six">
              previous exercise
            </Link>{" "}
            for embedded programming and it takes care of the hardware level
            programming for you.
          </li>
          <li>
            3. They have a good enough color profile and dont take much power.
          </li>
        </ol>
      </div>
      <h1>3. Design/ Schematic</h1>
      <div>
        After finishing up the idea, I first started working on my own board. I
        followed along the tutorial we created in class and added two interfaces
        (pinheaders) for my two components. More about this can be read in the
        last assignment aswell.
      </div>
      <h1>4. Milling the Board and Soldering</h1>
      <div>
        I already talked about the milling for my final project in{" "}
        <Link className="underline" to="/assignments/eight">
          Assignment Eight
        </Link>
        . I had no big problems with the soldering process or anything else. I
        ended up having a ground island which I fixed with a capacitor, which I
        used to bridge from the GND island to the rest.
      </div>
      <h1>5. The Case</h1>
      <div>
        My case would consist of three major components. The base plate, which
        is thin and made out of mdf. the front, which is made out of plexiglass
        with baking paper and multiple spacers inbetween. The back and front are
        the exist same component, just different materials. I created this
        fusion file, where I placed the seven-segments with each LED using the
        actual measurements to get a hold of the measurements I needed for
        lasercutting. The final measurements were 41.3cm x 17.6cm. I then
        created the DXF file for only the sketch of the base and lasercut the
        base with mdf and front with plexiglass.
      </div>
      <img src="/final/base-plate.png"></img>
      <h1>6. LED Communication</h1>
      <div>
        After milling the base plate, I drew support lines on the plate to help
        me arrange the LEDs properly. Here is a cool picture showing that:
      </div>
      <img src="/final/support-lines.jpeg"></img>
      <div>
        I used a hot glue gun to fixate the LEDs onto the board and soldered
        them together. I did this for the first digit and uploaded an example
        sketch to my chip to test if it works. I connected the LED strip using
        the GND, 5V and DATA_IN Pins to my board. This video showcases the digit
        counting up from 0 to 9 in an infite loop.
      </div>
      <video controls className="mt-2">
        <source src="/final/first-digit.mp4" type="video/mp4"></source>
      </video>
      <h1>7. WiFi Module</h1>
      <div>
        At this point things got really tricky. I connected the wifi module to
        my board using all the pins necessary and the Power LED blinked. But
        then noticed a burned smell and figured out something wasn't going
        right. The module was fried. The datasheet noted that the module needed
        3.3V, I however applied 5V because I did not realise this. This made
        things a lot harder. We ordered a new one but I also had to update my
        setup so I can even provide 3.3V. To do this, we added a 5V to 3.3V
        step-down voltage regulator (
        <a className="underline" href="https://www.pololu.com/product/2842">
          Link
        </a>
        ). This component needed GND, V_IN to provide V_OUT and needs to be
        between the 5V from my chip and the 3x 3.3V needed for my wifi module. I
        ended up connecting it to one of the 3 VCC pinheaders which were
        originally intended for the wifi module and cut open two jumper cables
        to split the V_OUT into 3. This module then worked like a charm and
        rescued my project. I double checked all the voltages before plugging it
        into the wifi module again and this time it worked. Now, there was only
        the second obstacle with the wifi module, which was to program it.
        Luckily the combination of the datasheet, a youtube video (
        <a
          className="underline"
          href="https://www.youtube.com/watch?v=HyRopfB3aQI"
        >
          Link
        </a>
        ) and Ahmed helped me to both turn on the programming mode and upload
        the sketch to the wifi module. The big clue was to connect the GPIO0 PIN
        to GND on boot and switch the RX/ TX // RXD/ TXD pins. This is what this
        looked like.
      </div>
      <img src="/final/wifi-program.jpeg"></img>
      <div>
        The purple/ black cable is GND, this is split into two and connected to
        the step-down and the wifi module. 5V VCC (red cable) is connected into
        V_IN of the step-down. V_OUT (white cable) of the step-down is split
        into three and connected to the wifi module. RXD (blue cable) is
        connected to RX on the module and TXD (green cable) is connected to TX.
      </div>
      <h1>8. The Marriage</h1>
      <div>
        Now the time had come to combine everything. The wifi module talking to
        the chip and the chip talking to the LED strip. This is what my setup
        for this looked like. I will explain this briefly.
      </div>
      <img src="/final/final-setup.jpeg"></img>
      <div>
        I used the USB to Serial converter to power my board. the purple cable
        is GND which is connected to GND on my board. Same goes for the white
        power cable. I connected the step-down voltage regulator (component that
        is almost falling off the table) with my board using GND and 5V pins.
        The 3.3V output are connected to 3 pins on the wifi module. furthermore
        RXD and RX, aswell as TXD and TX between the wifi module and my board
        are connected as well as GND. The LED strip is connected to the board
        using 5V VCC, GND and DATA PIN 2. It was quite the hurdle to switch
        between programming the wifi module and testing it. I will show the
        final code for the wifi module and the atmega chip later, as I had many
        versions. But here is a video showcasing the basic functionality. At
        this point, the code was bad, which is why there is a big delay between
        clicking something in the UI and the LED updating. ANother interesting
        aspect here is the architecture im using right now. The Laptop is
        connected to my home internet over wifi, same goes for the wifi module.
        Inside my local network I can access this website from anywhere. I also
        tested this with a wifi hotspot from my phone, which worked fine aswell.
      </div>
      <video controls className="mt-2">
        <source src="/final/first-color-change.mp4" type="video/mp4"></source>
      </video>
      <div>
        Now I had to do a lot more soldering to get all the 29 LEDs connected...
      </div>
      <img src="/final/soldering.png"></img>
      <div>
        After I was done with soldering, it was time for another test. This
        time, I would also retrieve the time over the NtpClient (Network Time
        Protocol). In this picture, you can see all LEDs working as intended
        while also displaying the correct time (16:52)
      </div>
      <img src="/final/everything-soldered.png"></img>
      <h1>9.The Code</h1>
      <div>
        I had to both program the atmega chip and the wifi module. First I will
        paste the code and then talk about some highlights.
      </div>
      <h2>Atmega328p</h2>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
#include <Adafruit_NeoPixel.h>
#include <SoftwareSerial.h>

#define PIN 2	 // input pin Neopixel is attached to

#define NUMPIXELS 29 // number of neopixels in strip

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

byte digits[10][7] = {
  {1,1,1,0,1,1,1}, // 0
  {0,0,1,0,0,0,1}, // 1
  {0,1,1,1,1,1,0}, // 2
  {0,1,1,1,0,1,1}, // 3
  {1,0,1,1,0,0,1}, // 4
  {1,1,0,1,0,1,1}, // 5
  {1,1,0,1,1,1,1}, // 6
  {0,1,1,0,0,0,1}, // 7
  {1,1,1,1,1,1,1}, // 8
  {1,1,1,1,0,1,1}  // 9
};

int red = 0;
int green = 255;
int blue = 0;

String command = "";

void setup() {
  pinMode(3, INPUT);
  pixels.begin();
  Serial.begin(115200);
}

void loop() {

  int current = millis();

  while (Serial.available()) {

    char c = Serial.read();
    if (c == '\\n') {
      handleCommand(command);
      command = "";
    } else {
      command += c;
    }
  }
}

void handleCommand(String cmd) {
  cmd.trim();

  if (cmd.startsWith("TIME:")) {
    parseTime(cmd.substring(5));
  }
  else if (cmd.startsWith("COLOR:")) {
    parseColor(cmd.substring(6));
  }
}

void parseTime(String payload) {
  pixels.clear();
  updateDisplay(payload.charAt(0) - '0', 0);
  updateDisplay(payload.charAt(1) - '0', 7);
  updateDisplay(payload.charAt(3) - '0', 15);
  updateDisplay(payload.charAt(4) - '0', 22);
  pixels.show();
}

void parseColor(String payload) {
  int firstComma = payload.indexOf(',');
  int secondComma = payload.indexOf(',', firstComma + 1);

  if (firstComma == -1 || secondComma == -1) return; // invalid

  red = payload.substring(0, firstComma).toInt();
  green = payload.substring(firstComma + 1, secondComma).toInt();
  blue = payload.substring(secondComma + 1).toInt();

  for (int i = 0; i < NUMPIXELS; i++) {
    uint32_t currentColor = pixels.getPixelColor(i);
    if (currentColor != 0) {   // 0 means “off”
      pixels.setPixelColor(i, correctedColor(red, green, blue));
    }
  }
  pixels.show();
}

uint32_t correctedColor(int r, int g, int b) {
  return pixels.Color(
    pixels.gamma8(r),
    pixels.gamma8(g),
    pixels.gamma8(b)
  );
}

void updateDisplay(int digit, int start) {
  pixels.setPixelColor(14, pixels.Color(red, green, blue));
  for (int i=0; i < 7; i++) {
    if(digits[digit % 10][i] == 1) {
        pixels.setPixelColor(i + start, pixels.Color(red, green, blue));
    }
  }
}
          `}
      </SyntaxHighlighter>
      <h2>WiFi Module</h2>
      <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
        {`
#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#include <NTPClient.h>

const char* ssid = "FRITZ!Box 5530 QS";
const char* password = "*";

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", 3600, 600000); 

WiFiServer server(80);

int lastMinute = -1;

void setup()
{
  Serial.begin(115200);
  Serial.println();

  Serial.printf("Connecting to %s ", ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" connected");

  server.begin();
  Serial.printf("Web server started, open %s in a web browser\\n", WiFi.localIP().toString().c_str());

  timeClient.begin();
}


// prepare a web page to be send to a client (web browser)
String prepareHtmlPage()
{
  String htmlPage;
  htmlPage.reserve(1024);               // prevent ram fragmentation
  htmlPage = F("HTTP/1.1 200 OK\\r\\n"
               "Content-Type: text/html\\r\\n"
               "Connection: close\\r\\n"
               "Refresh: 5\\r\\n"
               "\\r\\n");

  // Use raw string literal for HTML + JS
  htmlPage += R"rawliteral(
<!DOCTYPE HTML>
<html>
<head>
  <title>LED Color Picker</title>
</head>
<body>
  <h1>LED Color Picker</h1>
  <input type="color" id="colorPicker" value="#00FF00">
  <button onclick="sendColor()">Set Color</button>

  <script>
    function sendColor() {
      const color = document.getElementById("colorPicker").value; // "#RRGGBB"
      const rgb = color.substring(1);
      const r = parseInt(rgb.substring(0,2), 16);
      const g = parseInt(rgb.substring(2,4), 16);
      const b = parseInt(rgb.substring(4,6), 16);
      fetch(\`/COLOR?r=\${r}&g=\${g}&b=\${b}\`);
    }
  </script>
</body>
</html>
)rawliteral";
  return htmlPage;
}


void loop()
{
  WiFiClient client = server.accept();
  if (client)
  {
      if (client.available())
      {
        String request = client.readStringUntil('\r');
        client.flush();

        if (request.indexOf("/COLOR") != -1) {
          int rIndex = request.indexOf("r=");
          int gIndex = request.indexOf("g=");
          int bIndex = request.indexOf("b=");
          if (rIndex!=-1 && gIndex!=-1 && bIndex!=-1) {
            int r = request.substring(rIndex+2, gIndex-1).toInt();
            int g = request.substring(gIndex+2, bIndex-1).toInt();
            int b = request.substring(bIndex+2).toInt();

            Serial.printf("COLOR:%d,%d,%d\n", r, g, b);
          }
        }

        client.println(prepareHtmlPage());
        client.stop();
      }
  }

  timeClient.update();  // fetch current time from NTP server

  // get hours, minutes, seconds
  int hours = timeClient.getHours();
  int minutes = timeClient.getMinutes();

  if (lastMinute != minutes) {
    Serial.printf("TIME:%02d,%02d\n", hours, minutes);
    lastMinute = minutes;
  }
  
}`}
      </SyntaxHighlighter>
      <div>
        For the communication between the wifi module and the atmega, I
        implemented a command based communication. There are two commands, as of
        right now. "TIME:" and "COLOR:". These take certain parameters like the
        RGB-value or the current hours and minutes. Its easy to expand this
        command system by adding another command like "TIMER:00,40", which would
        set a timer for 40 minutes. To reduce unneccessary http requests to the
        NTP Server, I added a sync time. The current time is synced once every
        hour and for the rest of the time, the local module time is used.
      </div>
      <div>
        Now there was one thing left: Adding the spacer/ border of the digits/
        LEDs. The idea was to cut out wooden blocks for this since I have the
        machines and the materials for this at home. What I cut out ended up
        looking like this:
      </div>
      <img src="/final/space.png"></img>
      <div>
        I tested this with one digit and I was quite happy with the results:
      </div>
      <img src="/final/first-digit-walls.png"></img>
      <div>
        You are easily able to distinct between the segment with the LED on vs.
        off. I didnt want the blocks to touch the LEDs, which led to me making
        them a tiny bit smaller, this however already had a huge impact, but I
        noticed it too late...
      </div>
      <h1>10. Final Version</h1>
      Features:
      <ol>
        <li>
          2. connects to home wifi and hosts a webserver in the local network
        </li>
        <li>2. displays the correct time on boot, which syncs every hour</li>
        <li>3. UI via webserver, with option to change the color</li>
      </ol>
      <h2>Color Change</h2>
      <video controls className="mt-2">
        <source src="/final/color-change.mp4" type="video/mp4"></source>
      </video>
      <h2>Time Change</h2>
      <video controls className="mt-2">
        <source src="/final/time-change.mp4" type="video/mp4"></source>
      </video>
      <h1>11. Takeaways</h1>
      Overall, im really happy with how the project turned out. I got all the
      core features done, which I originally planned to do. I did 2 bigger
      mistakes, these being:
      <ol>
        <li>
          1. Fried the wifi module: I simply did not know that I had to watch
          out for the voltage as much. I thought that the chip has 5V and its
          gonna be fine. I had not even considered this to be a problem
        </li>
        <li>
          2. LED tunnels: I should have done more research about the light
          behaviour (how much it spreads etc). You can see the segments
          relatively clear but it could have been way sharper aswell and it
          would make it look a lot cooler.
        </li>
      </ol>
      <h1>12. Whats coming next?</h1>
      <div>
        I really want to use this. Its a cool addition to my room and it makes
        me proud that I was able to do this all by myself in the course of this
        class. Its not fully finished yet however, and there are some things
        that need to be done. First, I need to order a power supply with 5V,
        which I can connect using the GND and VCC pins. Right now im still using
        the USB-to-Serial Converter, which is really messy. Furthermore, I would
        need to secure everything in place proper, this includes: Getting rid of
        as many jumper cables as possible and instead solder everything
        together, use a hot glue gun to provide even more stability, and finally
        fixate the front on top. I could then hang this on a wall and always
        have a cool, low-energy way to know the time :)
      </div>
      <div>
        At the start I also considered adding data from an API to display any
        kind of data (that fits into 4 digits)
      </div>
      <h1>13. Conclusion</h1>
      <div>
        Signing up for this class and trying our best to get it offered, was the
        best decision. I feel like I really did learn a lot, compared to other
        modules and it was always fun. It was a ton of work, but I would do it
        again every time and suggest other people to participate aswell.
      </div>
    </div>
  );
}
