// This script should get the added stats game by game for each player
// {'PA' : ,'AB' :  , 'R' :  , 'H' : , 'Single' : , 'Double' : , 'Triple': , 'HR' : , 'RBI' : , 'HBP': , 'BB' : , 'K' : , 'SB' :  , 'CS' :   },
var AlexanderVStats= [
    {'PA' : 4,'AB' :  3, 'R' :  0, 'H' : 0, 'Single' : 0, 'Double' : 0, 'Triple': 0, 'HR' : 0, 'RBI' : 0, 'HBP': 0, 'BB' : 1, 'K' : 1, 'SB' :  0, 'CS' :  0 },


]

var AnthonyStats = [
    

    

]

var BrandinNixon =[
    

]

var BrendanLarkin = [
    {'PA' : 4,'AB' :  1, 'R' :  3, 'H' : 1, 'Single' : 1, 'Double' : 0, 'Triple': 0, 'HR' : 0, 'RBI' : 0, 'HBP': 1, 'BB' : 2, 'K' : 0, 'SB' : 0 , 'CS' : 0},

    

]

var EnyerPerozo =[
    

] 

var JulioStats = [
    {'PA' : 4,'AB' :  4, 'R' :  1, 'H' : 3, 'Single' : 2, 'Double' : 1, 'Triple': 0, 'HR' : 0, 'RBI' : 0, 'HBP': 0, 'BB' : 0, 'K' : 0, 'SB' :  0, 'CS' : 0 },


    

]

var KevinAlvarez =[
    



]

var LennyPeralta = [
  {'PA' : 4,'AB' :  2, 'R' :  1, 'H' : 1, 'Single' : 0, 'Double' : 0, 'Triple': 0, 'HR' : 1, 'RBI' : 3, 'HBP': 0, 'BB' : 1, 'K' : 1, 'SB' :  0, 'CS' :  0},    



]

var LuisMoronta =[
    {'PA' : 4,'AB' :  4, 'R' : 1 , 'H' : 1, 'Single' : 1, 'Double' : 0, 'Triple': 0, 'HR' : 0, 'RBI' : 0, 'HBP': 0, 'BB' : 0, 'K' : 1, 'SB' :  0, 'CS' :  0 },



]
var LuisBaroni =[
    {'PA' : 4,'AB' :  4, 'R' :  0, 'H' : 0, 'Single' : 0, 'Double' : 0, 'Triple': 0, 'HR' : 0, 'RBI' : 0, 'HBP': 0, 'BB' : 0, 'K' : 3, 'SB' :  0, 'CS' :  0},




]

var LuisMartinez = [
    



]

var LuisMunoz = [
   



]

var ServioRincon =[
    


]

var LeswardSuit =[
  {'PA' : 3,'AB' :  3, 'R' :  0, 'H' : 0, 'Single' : 0, 'Double' : 0, 'Triple': 0, 'HR' :0 , 'RBI' :0 , 'HBP':0 , 'BB' :0 , 'K' : 0, 'SB' : 0 , 'CS' :  0 },
  
]

var TylerKendrick =[
  {'PA' : 4,'AB' :  4, 'R' :  0, 'H' : 2, 'Single' : 2, 'Double' : 0, 'Triple': 0, 'HR' : 0, 'RBI' : 1, 'HBP': 0, 'BB' : 0, 'K' : 1, 'SB' :  0, 'CS' : 0  },
  
]

var HamptonMamay =[
  {'PA' : 3,'AB' :  3, 'R' :  1, 'H' : 0, 'Single' : 0, 'Double' : 0, 'Triple': 0, 'HR' : 0, 'RBI' : 0, 'HBP': 0, 'BB' : 0, 'K' : 0, 'SB' : 0 , 'CS' :  0 },
  
]

var Dario =[
  
  
]

var BobbyBoniila =[
  
]
//add comment





// Adds all the elements together to get total stats from each game
function addStats(stats){
    var Gsum =stats.length; //0
    var PAsum = 0; // 1
    var ABsum = 0; // 2
    var Rsum = 0; // 3
    var Hsum = 0; //4
    var Singlesum = 0; //5
    var Doublesum = 0; //6
    var Triplesum = 0; //7
    var HRsum = 0; //8
    var RBIsum = 0; //9
    var HBPsum = 0; //10
    var BBsum = 0; //11
    var Ksum = 0; // 12
    var SBsum = 0; //13
    var CSsum = 0; //14

    for(var i = 0; i < stats.length; i++){
        PAsum += stats[i].PA;
        ABsum += stats[i].AB;
        Rsum += stats[i].R;
        Hsum += stats[i].H;
        Singlesum += stats[i].Single;
        Doublesum += stats[i].Double;
        Triplesum += stats[i].Triple;
        HRsum += stats[i].HR;
        RBIsum += stats[i].RBI;
        HBPsum += stats[i].HBP;
        BBsum += stats[i].BB;
        Ksum += stats[i].K;
        SBsum += stats[i].SB;
        CSsum += stats[i].CS;
    }
    var totalArr = [Gsum,PAsum,ABsum,Rsum,Hsum,Singlesum,Doublesum,Triplesum,HRsum,RBIsum,HBPsum,BBsum,Ksum,SBsum,CSsum]; 
  return totalArr;
}


// Running everyones stats through addStats function and creating a new array for it
var AnthonySumStats = addStats(AnthonyStats);
var JulioSumStats = addStats(JulioStats);
var AlexanderSumStats = addStats(AlexanderVStats);
//var BrandinNixonSumStats = addStats(BrandinNixon);
var BrendanLarkinSumStats = addStats(BrendanLarkin);
var EnyerPerozoSumStats = addStats(EnyerPerozo);
var KevinAlvarezSumStats = addStats(KevinAlvarez);
var LennyPeraltaSumStats = addStats(LennyPeralta);
var LuisBaroniSumStats = addStats(LuisBaroni);
var LuisMorontaSumStats = addStats(LuisMoronta);
//var LuisMartinezSumStats = addStats(LuisMartinez);
//var LuisMunozSumStats = addStats (LuisMunoz);
var ServioRinconSumStats = addStats(ServioRincon);
var LeswardSuitSumStats = addStats(LeswardSuit);
var TylerKendrickSumStats = addStats(TylerKendrick);
var HamptonMamaySumStats = addStats(HamptonMamay);


// Calculating AVG OBP SLG OPS with the newly created *SumStats array
function calculateStats(data){
    var AVG;
    var OBP;
    var SLG;
    var OPS;
    var currentStats = data;

    if (currentStats[1] == 0){
        AVG = 0.000;
        OBP = 0.000;
        SLG = 0.000;
        OPS = OBP + SLG;
    }
    else if (currentStats[1] != 0 && currentStats[2] == 0){
        AVG = 0.000;
        OBP = (currentStats[4]+currentStats[11]+currentStats[10])/(currentStats[2]+currentStats[11]+currentStats[10]);
        SLG = 0.000;
        OPS = OBP + SLG;
    }
    else{
    AVG = (currentStats[4]/currentStats[2]);
    OBP = (currentStats[4]+currentStats[11]+currentStats[10])/(currentStats[2]+currentStats[11]+currentStats[10]);
    SLG = (currentStats[5]+(currentStats[6]*2)+(currentStats[7]*3)+(currentStats[8]*4))/currentStats[2];
    OPS = OBP + SLG
    }
    var fullStats = [AVG.toFixed(3),OBP.toFixed(3),SLG.toFixed(3),OPS.toFixed(3)];

    return fullStats


}

console.log("Hello World!");

console.log(AnthonyStats.length);
console.log(addStats(AnthonyStats))
console.log(calculateStats(AnthonySumStats))
console.log(calculateStats(JulioSumStats));


// CONCAT the SumStats Array with the new Calaculated stats 
// And using splice to add Player name to Array
// TotalStats is the Full line of stats for the player
var AnthonyTotalStats = (AnthonySumStats.concat(calculateStats(AnthonySumStats)));
AnthonyTotalStats.splice(0,0,"Anthony Lopez")


var JulioTotalStats = JulioSumStats.concat(calculateStats(JulioSumStats));
JulioTotalStats.splice(0,0,"Julio Chavez")

var AlexanderTotalStats = AlexanderSumStats.concat(calculateStats(AlexanderSumStats));
AlexanderTotalStats.splice(0,0,"Alexander Villalba");

//var BrandinNixonTotalStats = BrandinNixonSumStats.concat(calculateStats(BrandinNixonSumStats));
//BrandinNixonTotalStats.splice(0,0,"Brandin Nixon");

var BrendanLarkinTotalStats = BrendanLarkinSumStats.concat(calculateStats(BrendanLarkinSumStats));
BrendanLarkinTotalStats.splice(0,0,"Brendan Larkin");

var EnyerPerozoTotalStats = EnyerPerozoSumStats.concat(calculateStats(EnyerPerozoSumStats));
EnyerPerozoTotalStats.splice(0,0,"Enyer Perozo");

var KevinAlvarezTotalStats = KevinAlvarezSumStats.concat(calculateStats(KevinAlvarezSumStats));
KevinAlvarezTotalStats.splice(0,0,"Kevin Alvarez");

var LennyPeraltaTotalStats = LennyPeraltaSumStats.concat(calculateStats(LennyPeraltaSumStats));
LennyPeraltaTotalStats.splice(0,0,"Lenny Peralta");

var LuisBaroniTotalStats = LuisBaroniSumStats.concat(calculateStats(LuisBaroniSumStats));
LuisBaroniTotalStats.splice(0,0,"Luis Baroni");

//var LuisMartinezTotalStats = LuisMartinezSumStats.concat(calculateStats(LuisMartinezSumStats));
//LuisMartinezTotalStats.splice(0,0,"Luis Martinez");

var LuisMorontaTotalStats = LuisMorontaSumStats.concat(calculateStats(LuisMorontaSumStats));
LuisMorontaTotalStats.splice(0,0,"Luis Moronta");

//var LuisMunozTotalStats = LuisMunozSumStats.concat(calculateStats(LuisMunozSumStats));
//LuisMunozTotalStats.splice(0,0,"Luis Muñoz")

var ServioRinconTotalStats = ServioRinconSumStats.concat(calculateStats(ServioRinconSumStats));
ServioRinconTotalStats.splice(0,0,"Servio Rincon");

var LeswardSuitTotalStats = LeswardSuitSumStats.concat(calculateStats(LeswardSuitSumStats));
LeswardSuitTotalStats.splice(0,0,"Lesdward Suit");

var TylerKendrickTotalStats = TylerKendrickSumStats.concat(calculateStats(TylerKendrickSumStats));
TylerKendrickTotalStats.splice(0,0,"Tyler Kendrick");

var HamptonMamayTotalStats = HamptonMamaySumStats.concat(calculateStats(HamptonMamaySumStats));
HamptonMamayTotalStats.splice(0,0,"Hampton Mamay");




// CONCATING all the Total stats to make one big array. in alpha order
var AllPlayersStats = AlexanderTotalStats.concat(AnthonyTotalStats,BrendanLarkinTotalStats,EnyerPerozoTotalStats,JulioTotalStats,KevinAlvarezTotalStats,LennyPeraltaTotalStats,LuisBaroniTotalStats,LuisMorontaTotalStats,ServioRinconTotalStats,LeswardSuitTotalStats,TylerKendrickTotalStats,HamptonMamayTotalStats);
console.log(AllPlayersStats);


// function to insert the big array in html table. 
// Inserts first 20 element -> new row -> next 20 elements -> new row -> etc 
function insertPlayerRow(Arr){

    var table = "<tr>", perrow = 20, cells = 0;
    Arr.forEach((value,i)=>{
        if(cells%perrow ==0){
            let trimmedName = value.split(" ").join("");
            table += `<td><a href ="Players/${trimmedName}.html">${value}</a></td>`;
        
        }
        else{
            table += `<td>${value}</td>`;

            //<a href="Players/ServioRincon.html">Servio Rincon</a>
        }
        cells++;
        if(cells%perrow==0 && cells != Arr.length){
            table += "</tr><tr>";
        }
    });
    table += "</tr>";
    document.getElementById("Summer2025Table")
        .innerHTML = table;

}

insertPlayerRow(AllPlayersStats);
