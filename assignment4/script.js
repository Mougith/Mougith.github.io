var names=new Array();
names[0]="Moumita";
names[1]="John";
names[2]="jason";
names[3]="jim";
names[4]="hose";
names[5]="paul";
names[6]="larry";
names[7]="harry";
names[8]="jack";
names[9]="yakov";


for(var i=0;i<names.length;i++){
	if(names[i].charAt(0)=='j' || names[i].charAt(0)=='J'){
		console.log("Goodbye " + names[i])
	}
	else{
		console.log("Hello "+names[i])
	}
}