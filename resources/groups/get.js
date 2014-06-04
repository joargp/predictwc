this.teams = [];

dpd.countries.get({groupId: this.id }, function(result) {
  this.teams = result;
});

