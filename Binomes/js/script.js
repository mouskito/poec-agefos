var tabAllStudents = [["Abdel",
                       "Ali",
                       "François",
                       "Rémi",
                       "Sajjad",
                       "Sébastien",
                       "Stéphane"
                      ],
                      ["Amare",
                       "Christiane",
                       "Jessy",
                       "Léa",
                       "Rayane",
                       "Stevens",
                       "Xavier"
                      ]];
var fCol = $("#firstCol");
var sCol = $("#secondCol");
var strCol_1 = "";
var strCol_2 = "";
var nbRandom = 0;
var tmpLength = tabAllStudents[0].length;

for (var i = 0; i < tmpLength; i++) {
    nbRandom = parseInt(Math.random() * (tmpLength - i));
    strCol_1 += "<p style=\"color:#c" + i + (tmpLength - i) + "\">" + tabAllStudents[0][nbRandom] + "</p>";
    tabAllStudents[0].splice(nbRandom, 1);
}
for (var i = 0; i < tmpLength; i++) {
    nbRandom = parseInt(Math.random() * (tmpLength - i));
    strCol_2 += "<p style=\"color:#c" + i + (tmpLength - i) + "\">" + tabAllStudents[1][nbRandom] + "</p>";
    tabAllStudents[1].splice(nbRandom, 1);
}

fCol.html(strCol_1);
sCol.html(strCol_2);
