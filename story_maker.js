function makeStory() {
    // get form values (2 points)
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;
    var verb3 = document.getElementById('verb3').value;
    var verb4 = document.getElementById('verb4').value;
    var plural_noun1 = document.getElementById('plural_noun1').value;
    var plural_noun2 = document.getElementById('plural_noun2').value;
    var plural_noun3 = document.getElementById('plural_noun3').value;
    var plural_noun4 = document.getElementById('plural_noun4').value;
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var adjective3 = document.getElementById('adjective3').value;
    var adverb1 = document.getElementById('adverb1').value;
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var city1 = document.getElementById('city1').value;


    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "The Space Shuttle";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "In 1981, the U.S. launched the first real Space " + noun1 + ".  It was named Columbia and was piloted by two brave " +
                     plural_noun1 + ".  They had practiced " + verb1 + " for two years and were expert " + plural_noun2 +
                     ".  Columbia took off from " + city1 + " using its powerful first-stage " + plural_noun3 + " and soared off into the " +
                     adjective1 + " blue " + noun2 + ".  At an altitude of " + number1 + " feet, it went into orbit around the " + noun3 +
                     ".  For people watching from Earth, it was a/an " + adjective2 + " sight to " + verb2 + "!  Who could really " + verb3 +
                     " that there were two " + plural_noun4 + " in space?  It was mind " + verb4 + ".  After " + number2 +
                     " orbits, the shuttle landed " + adverb1 + " at an air force " + noun4 + ".  It was a/an " + adjective3 +
                     " day for the U.S. Space Program.";


    // Display story by putting title & paragraphs into appropriate divs. (3 points)
    document.getElementById('title').innerHTML = title;
    document.getElementById('one').innerHTML = paragraph1;

}
