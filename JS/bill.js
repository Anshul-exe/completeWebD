function whosPaying(names) {
    
    const nameList = names.length;
    const nameChoice = Math.floor(Math.random() * nameList);
    const personSelected = names[nameChoice];
    
    return personSelected + " is going to buy lunch today";
     
}