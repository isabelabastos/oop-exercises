function processList()
{
    var namesEntered = document.getElementById('textBox1').value.split(' ');
    var names = ["John", "Bill", "Mary", "Ted", "Roger"];
    var caseSensitive = document.getElementById('chkCaseFlag').checked;
    var matching = '';
    for(i = 0; i < namesEntered.length; i++ ) {
        for(j = 0; j < names.length; j++) {
            if(caseSensitive){
                if (namesEntered[i] == names[j]) {
                    matching += names[j];
                }
            }
            else {
                if (namesEntered[i].toLowerCase() == names[j].toLowerCase()) {
                    matching += names[j] + ' ';
                }
            }

        }
    }
    alert("We found those names: " + matching);
}

function changeColor()
{
    document.getElementById('process').style.backgroundColor = "blue";
}

function colorBack()
{
    document.getElementById('process').style.backgroundColor ="lightgray";
}

/**
 * Created by User on 2/2/2017.
 */
