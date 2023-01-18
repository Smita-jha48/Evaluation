let pinsKnocked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];

function scoreCalculator(pinsKnocked){
    if(pinsKnocked.length>21)throw new Error('Invalid Type');
    else{
    let score=0;
     for(let i=0;i<20;i++)
        if(pinsKnocked[i] == 10){
           score = score +10;
           if(i<pinsKnocked.length-2 )
           score=score+pinsKnocked[i+1]+pinsKnocked[i+2];
           if(i==18)
           i=i+2;
        }
        else if(i<pinsKnocked.length-2 && (pinsKnocked[i]+pinsKnocked[i+1])==10){
            score=score+10+pinsKnocked[i+2];
            i++;
        }
        else{
            score = score+ pinsKnocked[i]+pinsKnocked[i+1];
            i++;
        }

        return score;
    }
        
       
}
module.exports = {scoreCalculator};
console.log(scoreCalculator(pinsKnocked));
