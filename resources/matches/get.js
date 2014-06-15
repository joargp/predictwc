var date = new Date(+this.startTime);
//date.setTime(date.getTime() + (2*60*60*1000)); 
this.startTime = date.toDateString() + " " + date.toTimeString().split(' ')[0];

dpd.countries.get({id: this.homeTeamId }, function(result) {
  this.homeTeam = result;
});
dpd.countries.get({id: this.awayTeamId }, function(result) {
  this.awayTeam = result;
});

if (me) 
{
    dpd.bets.get({userId: me.id, matchId: this.id }, function(result) {
        if (result.length > 0) {
            this.locked = true;
            console.log(result.homeScore);
            this.chosenHomeScore = result[0].homeScore;
            this.chosenAwayScore = result[0].awayScore;
        }  
    });
} else {
    Cancel("Login first.", 400);
}