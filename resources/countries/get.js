//dpd.groups.get({id: this.groupId }, function(result) {
//  this.group = result;
//});
// caused cyclic reference loop with countries already being fetched in groups

dpd.groups.get({id: this.groupId }, function(result) {
    this.group = result.name;
});