function okayClicked()
{
    document.getElementsByName("test-div").innerHTML = "text changed.";
    document.getElementsByClassName("test-div").innerHTML = "text changed.";
}

function cancelClicked() {
    var innerHTML = document.getElementById("demo").innerHTML
    if (innerHTML) "---"
    {
        innerHTML = "Paragraph changed.";
    } else {
        innerHTML = "---"
    }
    
}