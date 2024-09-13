//greeting function based on the provided greeting function
function greeting(name, greetingFunction) {
    console.log(greetingFunction(name));
}

//good morning
function goodMorning(name) {
    return "Good morning " + name + "!";
}

//good night
function goodNight(name) {
    return "Goodnight " + name + "!";
}

//good afternoon
function goodAfternoon(name) {
    return "Good afternoon " + name + "!";
}

//try output
greeting("Mary Sue", goodMorning);
greeting("John Doe", goodNight);
greeting("Billy Bob", goodAfternoon);