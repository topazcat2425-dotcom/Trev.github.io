import pandas as pd
import math

df = pd.read_excel('format.xlsx', 'Sheet1')

print(df)

print(df.loc[0])

# Open html
Func = open("FriendlyFeudFinal.html","w")

Func.write("""<!DOCTYPE html>
<html>

<head>
  <title>JavaScript testing</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="dark:bg-blue-900 h-full lg:bg-blue-900 lg:dark:bg-blue-900 text-center">

  <div class="fixed inset-0 z-50 flex items-center justify-center hidden" id="xcontain">
    <img
      src="https://static.wikia.nocookie.net/gameshows/images/2/22/Family_Feud_Strike_Indicator.png/revision/latest?cb=20160216060413"
      class="lg:h-1/2 border-8 border-transparent hidden" id="x-1">
    <img
      src="https://static.wikia.nocookie.net/gameshows/images/2/22/Family_Feud_Strike_Indicator.png/revision/latest?cb=20160216060413"
      class="lg:h-1/2 border-8 border-transparent hidden" id="x-2">
    <img
      src="https://static.wikia.nocookie.net/gameshows/images/2/22/Family_Feud_Strike_Indicator.png/revision/latest?cb=20160216060413"
      class="lg:h-1/2 border-8 border-transparent hidden" id="x-3">
  </div>

  <!--this bit here is the score-->
  <div class="flex shrink-0 flex-col items-center p-10">
    <div class="fixed z-10 top-0">
      <div
        class="w-48 h-16 rounded-b-full bg-sky-900 p-4 font-bold text-white flex items-center justify-center outline-8 outline-offset-2 outline-yellow-500 outline-double dark:border-transparent">
        <font size="48" id="score">0</font>
      </div>
    </div>
  </div>

  <div class="fixed top-0 right-0 z-50">
    <div
      class="w-48 h-16 rounded-bl-full bg-sky-900 p-4 font-bold text-white flex items-center justify-center outline-8 outline-offset-2 outline-yellow-500 outline-double dark:border-transparent">
      <font size="48" id="score-2">0</font>
    </div>
  </div>

  <div class="fixed top-0 left-0 z-50">
    <div
      class="w-48 h-16 rounded-br-full bg-sky-900 p-4 font-bold text-white flex items-center justify-center outline-8 outline-offset-2 outline-yellow-500 outline-double dark:border-transparent">
      <font size="48" id="score-1">0</font>
    </div>
  </div>

  <div class="fixed top-24 right-0 z-50">
    <div dir="ltr"
      class="inline-flex h-24 rounded-s-full bg-sky-900 p-4 font-bold text-white items-center justify-center outline-8 outline-offset-2 outline-yellow-500 outline-double dark:border-transparent">
      <font size="48" id="score">Team 2</font>
    </div>
  </div>

  <div class="fixed top-24 left-0 z-50">
    <div dir="rtl"
      class="inline-flex h-24 rounded-s-full bg-sky-900 p-4 font-bold text-white items-center justify-center outline-8 outline-offset-2 outline-yellow-500 outline-double dark:border-transparent">
      <font size="48" id="score">Team 1</font>
    </div>
  </div>
  <!--this bit here is the question table-->
  <div class="flex flex-col justify-center items-center gap-8">

    <div class="min-w-[80rem] md:min-w-[85rem] lg:w-[90rem] gap-8">
      <br>
      <br>
""")

for i in range(len(df)):
    Func.write("""      <div class="min-w-[80rem] md:min-w-[85rem] lg:w-[90rem] gap-8">
        <div class="not-prose isolate">
          <figure
            class="flex flex-col gap-1 rounded-xl bg-gray-950/5 p-1 inset-ring inset-ring-gray-950/5 dark:bg-white/10 dark:inset-ring-white/10">
            <div class="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50">
              <div class="px-4 py-8 sm:px-8">
                <table
                  class="w-full border-separate rounded-sm border-4 border-cyan-400 bg-black dark:border-cyan-300 dark:bg-black">
                  <thead class="bg-blue-900 dark:bg-blue-900">
                    """)
    Func.write("""<tr>
                      <th colspan="12"
                        class="w-1/2 relative border border-gray-300 p-4 text-center text-shadow-lg/30 font-bold text-white border-gray-600 dark:text-gray-200">
                        <font size="28">""")
    Func.write(df.iloc[i, 0])
    Func.write('</font>                      </th>                    </tr>                  </thead>                  <tbody>                    ')
    
    
    
    for x in range(0, 4):
        Func.write("""<tr>
                      <!-- Single cell containing both side-by-side tables -->
                      <td class="border-gray-300 p-0">
                        <div class="flex">
                          <div class="flex-1 relative">
                            <table class="w-full table-fixed border-separate border-4 rounded-lg">
                              <tbody>
                                <tr>
                                  <td
                                    class="w-10/12 border-r border-gray-300 p-4 text-center text-white rounded-l-sm bg-sky-700">
                                    <div class="text-lg md:text-xl lg:text-2xl truncate font-bold">""" + str(df.loc[i, "ANS " + str(x+1)]) + """</div>
                                  </td>
                                  <td class="w-2/12 p-4 text-center text-black rounded-r-sm bg-amber-200">
                                    <font size="28"><b id="s"""+ str(i+1) +"-" + str(x+1) +'"'+""" class="unused">""" + str(df.loc[i, "Val " + str(x+1)]) + """</b></font>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <!--THE COVER!!!-->
                            <div id=""" + '"' +str(i+1) +'-' + str(x+1) + '"'+"""
                              class="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-lg flex items-center justify-center">
                              <div
                                class="w-1/6 h-[5rem] text-7xl rounded-full bg-blue-700 p-4 font-bold text-white flex flex-col justify-center items-center outline-4 outline-slate-600 outline">
                                """+str(x+1)+"""
                              </div>
                            </div>

                          </div>
                        </div>
                      </td>
                      <!-- Single cell containing both side-by-side tables -->
                      <td class="border-gray-300 p-0">
                        <div class="flex">
                          <div class="flex-1 relative">
                            <table class="w-full table-fixed border-separate border-4 rounded-lg">
                              <tbody>
                                <tr>
                                  <td
                                    class="w-10/12 border-r border-gray-300 p-4 text-center text-white rounded-l-sm bg-sky-700">
                                    <div class="text-lg md:text-xl lg:text-2xl truncate font-bold">"""+str(df.loc[i, "ANS " + str(x+5)])+"""</div>
                                  </td>
                                  <td class="w-2/12 p-4 text-center text-black rounded-r-sm bg-amber-200">
                                    <font size="28"><b id="s"""+ str(i+1) +"""-""" + str(x+5) +'"' +""" class="unused">"""+str(df.loc[i, "Val " + str(x+5)])+"""</b></font>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <!--THE COVER!!!-->
                            <div id=""" + '"' +str(i+1) +'-' + str(x+5) + '"'+"""
                              class="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-lg flex items-center justify-center">
                              <div
                                class="w-1/6 h-[5rem] text-7xl rounded-full bg-blue-700 p-4 font-bold text-white flex flex-col justify-center items-center outline-4 outline-slate-600 outline">
                                """ +str(x+5)+"""
                              </div>
                            </div>

                          </div>
                        </div>
                      </td>
                    </tr>""")
                   
        
    Func.write("""                  </tbody>
                </table>
              </div>
            </div>
          </figure>

        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>""")


Func.write("""        <script>
          let current = 1;
          let questScore = 0;
          let team1 = 0;
          let team2 = 0;
          let exes = 0;
          let muted = false;

          document.onkeydown = function (e) {
            e = e || window.event;

            bigassswitchstatement(e.key.toLocaleLowerCase());
          };

          function bigassswitchstatement(pressed) {

            console.log(pressed);
            if (isNumber(pressed)) {
              console.log(pressed);
              showAns(pressed);
            }

            switch (pressed) {
              case 'enter':
                nextQuestion();
                break;
              case 'a':
                decideTeam(1);
                break;
              case 'd':
                decideTeam(2);
                break;
              case 'x':
                wrong();
                break;
              case 'r':
                reset();
                break;
              case 'm':
                mute();
                break;
              default:
                break;
            }
          }

          function showAns(char) {
            const id = current + "-" + char
            const question = document.getElementById(id);
            console.log(id);

            const score = document.getElementById("s" + id);
            const currentScore = document.getElementById("score");

            if (score.classList.contains("unused")) {
              question.classList.add("animate-ping");
              if (!muted) {
                const audio = new Audio("RIGHT.m4a");
                audio.play();
              }
              currentScore.innerHTML = Math.round(currentScore.innerHTML) + Math.round(score.innerHTML);
              score.classList.remove("unused");
              setTimeout(() => {
                question.classList.add("hidden");// Logs correctly
              }, 800);
            }

          }

          function timeIn() {
            question.classList.add("hidden");
          }

          function nextQuestion() {
            const currentScore = document.getElementById("score");
            current++;
            currentScore.innerHTML = "0";
          }

          function wrong() {
            exes++;
            if (exes > 3) {
              exes = 1;
              for (let i = 1; i <= 3; i++) {
                const x = document.getElementById("x-" + i);
                x.classList.add("hidden");
              }
            }
            const x = document.getElementById("x-" + exes);
            if (!muted) {
              const audio = new Audio("WRONG.m4a");
              audio.play();
            }
            x.classList.remove("hidden");
            const contain = document.getElementById("xcontain");
            contain.classList.remove("hidden");
            setTimeout(drStrange, 1000);

          }

          function drStrange() {
            const contain = document.getElementById("xcontain");
            contain.classList.add("hidden");
          }


          function reset() {
            for (let i = 1; i <= exes; i++) {
              const x = document.getElementById("x-" + i);
              x.classList.add("hidden");
            }
            exes = 0;
          }

          function decideTeam(teamNum) {
            const scoreboard = document.getElementById("score-" + teamNum);
            const currentScore = document.getElementById("score");
            scoreboard.innerHTML = Math.round(scoreboard.innerHTML, 10) + Math.round(currentScore.innerHTML);
            currentScore.innerHTML = "0";
          }
          function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

          function mute() {
            muted = !muted;
          }

        </script>
      </div>
    </div>
  </div>
</body>

</html>""")


# Saving the data into the HTML file
Func.close()