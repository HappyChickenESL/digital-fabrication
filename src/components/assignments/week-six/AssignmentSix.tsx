import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function AssignmentSix() {
  return (
    <div className="w-[50vw]">
      <h1 className="mt-0!">=============================</h1>
      <div className="text-3xl">Embedded Programming</div>
      <h1 className="mt-0! mb-8">=============================</h1>
      <h1>Task 1: Debounced Buttons</h1>
      <div className="my-4">
        Link:{" "}
        <a href="https://www.tinkercad.com/things/bqSfJZ6jfSa-exercise-one?sharecode=Ne4WewF7fMzw-m2q8P1S7EdXVJc-LQz-DKxQFLfHRYg">
          Tinkercad - Design One
        </a>
      </div>
      <img src="/week-six/exercise-one.png"></img>
      <div>
        I added 4 LEDs. One of them would be active at a time. To achieve this,
        I created a counter and added 2 pushbuttons. One to increment, and the
        other to decrement. I used a pulldown resistor in this case.
      </div>
      <div className="w-fit">
        <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
          {`
int redLed = 13;
int greenLed = 12;
int blueLed = 11;
int whiteLed = 10;
int increaseBtn = 6;
int decreaseBtn = 7;
int count = 0;

int leds[] = {redLed, greenLed, blueLed, whiteLed};

void setup()
{
  pinMode(redLed, OUTPUT);
  pinMode(greenLed, OUTPUT);
  pinMode(blueLed, OUTPUT);
  pinMode(whiteLed, OUTPUT);
  pinMode(increaseBtn, INPUT);
  pinMode(decreaseBtn, INPUT);
  Serial.begin(9600);
  
  digitalWrite(redLed, HIGH);
}

void loop() {
  // all buttons are powered by default
  if(digitalRead(increaseBtn) == HIGH ||
     digitalRead(decreaseBtn) == HIGH) {
    int change = 1;
    
    if(digitalRead(decreaseBtn) == HIGH) {
      change = -1;
    }
    
    // while-loop as debounce
    while(digitalRead(increaseBtn) == HIGH ||
          digitalRead(decreaseBtn) == HIGH) {
      
    }
    digitalWrite(leds[count], LOW);
    if(count == 0 && change == -1) {
      count = 4;
    }
    count = abs(count + change) % 4;
    digitalWrite(leds[count], HIGH);
  }
}
`}
        </SyntaxHighlighter>
      </div>
      <div>
        To debounce the time, I added a while-loop which would stop the loop
        from triggering again until the Power isnt HIGH anymore.
      </div>
      <h1>Task 2: Reaction Game</h1>
      <div className="my-4">
        Link:{" "}
        <a href="https://www.tinkercad.com/things/k1TyF1kNpbJ-reaction-game?sharecode=aXYMrAmq1JzaXsNHwumHRoP600hUnk8uJF4NibGk0E8">
          Tinkercad - Reaction Game
        </a>
      </div>
      <img src="/week-six/exercise-two.png"></img>
      <div>
        My game idea was a reaction game. You have 2 LEDs with 2 buttons and
        have to press the correct button within a certain time period. As you
        succeed, the game becomes harder by decreasing the amount of time you
        have to press the correct button until you lose. I used 2 LEDs and 2
        buttons with pull down resistors. This is my code:
      </div>
      <div className="w-fit">
        <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
          {`
int LED1 = 8;
int LED2 = 9;
int BUTTON1 = 2;
int BUTTON2 = 3;

int timeToAnswer = 2000;
int activeLED = 0;

void setup() {
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(BUTTON1, INPUT);
  pinMode(BUTTON2, INPUT);
  
  randomSeed(analogRead(0));
}

void loop() {
  digitalWrite(LED1, LOW);
  digitalWrite(LED2, LOW);
  
  activeLED = random(1, 3);
  
  if (activeLED == 1) {
    digitalWrite(LED1, HIGH);
  } else {
    digitalWrite(LED2, HIGH);
  }

  int startTime = millis();
  bool answered = false;

  while (millis() - startTime < timeToAnswer) {
    
    if (digitalRead(BUTTON1) == HIGH) {
      while(digitalRead(BUTTON1) == HIGH) {
    }
      checkAnswer(1);
      answered = true;
      break;
    }
    
    if (digitalRead(BUTTON2) == HIGH) {
      while(digitalRead(BUTTON2) == HIGH) {
    }
      checkAnswer(2);
      answered = true;
      break;
    }
  }

  if (!answered) {
    gameOver();
  }

  delay(500);
}

void checkAnswer(int buttonPressed) {
  if (buttonPressed == activeLED) {
    timeToAnswer = timeToAnswer * 0.9;
    
    digitalWrite(LED1, HIGH);
    digitalWrite(LED2, HIGH);
    delay(200);
    digitalWrite(LED1, LOW);
    digitalWrite(LED2, LOW);
    
  } else {
    gameOver();
  }
}

void gameOver() {
  for (int i = 0; i < 5; i++) {
    digitalWrite(LED1, HIGH);
    digitalWrite(LED2, HIGH);
    delay(150);
    digitalWrite(LED1, LOW);
    digitalWrite(LED2, LOW);
    delay(150);
  }
  
  timeToAnswer = 2000;
}

          `}
        </SyntaxHighlighter>
      </div>
      <h1>Task 3: Final Project</h1>
      <div className="my-4">
        Link:{" "}
        <a href="https://www.tinkercad.com/things/6ufab5cZ7Dp-super-fyyran-curcan?sharecode=WqQMTv0VCS9yzOaSdUgdu8ojW-lh9x_khurQnZvDcYU">
          Tinkercad - Design Three
        </a>
      </div>
      <img src="/week-six/exercise-three.png"></img>
      <div>
        My final project is a 7-segment-display. So I started implementing it
        here. I first created 7 neopixel strips with 4 leds each. I wired them
        all together and wired them to the digital Pin 2. I also added a button
        since I wanted to be able to increment the counter. I used ChatGPT to
        generate me the segments that would need to be turned on to get each
        digit, in the order in which I wired them together. I then simply looped
        over the certain array and either turned the LED on or not. I added the
        button and gave it a debounce effect so there are not side effects and
        was able to see the 7-segment-display increasing.
      </div>
      <div className="w-fit">
        <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
          {`
#include <Adafruit_NeoPixel.h>

#define PIN 2	 // input pin Neopixel is attached to

#define NUMPIXELS      28 // number of neopixels in strip

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

int counter = 0;

void setup() {
  pinMode(3, INPUT);
  pixels.begin();
  Serial.begin(9600);
}

void loop() {
  if(digitalRead(3) == HIGH) {
    // while-loop as debounce
    while(digitalRead(3) == HIGH) {
    }
    counter++;
    updateDisplay(counter);
  }
  
}

void updateDisplay(int counter) {
  pixels.clear();
  for (int i=0; i < 7; i++) {
    if(digits[counter % 10][i] == 1) {
      for(int j=0; j < 4; j++) {
        pixels.setPixelColor((i*4+j), pixels.Color(255, 0, 0));
      }
      
    }
  }
  pixels.show();
}
          `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
