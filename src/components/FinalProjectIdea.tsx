export default function FinalProjectIdea() {
  return (
    <div className="max-w-[60rem]">
      <div>
        <div className="text-xl  text-teal-400">1. Basic Idea</div>
        My project idea is a board with multiple 7-segment LED digits. This idea
        came to my mind because I always liked to show statistics and having a
        display which even a few digits can be really cool. The first "simpler"
        idea is to have a digital clock, which prints the 4 digits representing
        the current hour and minute of the day. Each segment will have an LED/
        LED strip behind them.
      </div>
      <div className="mt-4">
        <div className="text-xl  text-teal-400">2. More Advanced Idea</div>
        In addition to the basic idea, a potentiometer would be cool to
        increase/ decrease the brightness of the LEDs. An alternative to this
        could be a custom user interface like an app on the smartphone which can
        connect with the microcontroller over bluetooth, where you can configure
        anything. You can switch between 2 modes, one being the clock, which
        shows the current time and the other being the arbitrary mode, where you
        can configure each digit independetly and type in any number in each of
        the four digits. Ideally you can even control the color of each segment
        seperately or at least of each digit.
      </div>
      <div className="mt-4">
        <div className="text-xl text-teal-400 z-10">3. The Ultimate Goal</div>
        The final idea is a 4x2 digit display, that lets you customize anything
        you want via the app/ website. You can turn each segment on/ off
        individually, change the color and the hue. Potentially even with an
        internet connection so I could automatically update the display based on
        other factors.
      </div>
    </div>
  );
}
