this.createdOn = new Date().getTime();
if (me) {
    this.userId = me.id;
} else {
  cancel("You must login first", 401);
}
