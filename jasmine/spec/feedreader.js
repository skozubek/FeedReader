/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* Place all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */

  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* Test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

    allFeeds.forEach(function(feed, i) {
      it('feed ' + i + ' is defined', function() {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

    /* Test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    allFeeds.forEach(function(feed, i) {
      it('name ' + i + ' is defined', function() {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    });
  });

  /* The second suite "The menu" */

  describe('The menu', function() {

    /* Test that ensures the menu element is hidden by default.  */

    it('Menu element is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /* Test that ensures the menu changes
     * visibility when the menu icon is clicked.
     */

    it('Menu changes visibility when icon is clicked', function() {

      //first click - show
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      //second click - hide
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });

  /* Third test suite "Initial Entries" */

  describe('Initial Entries', function() {

    /* Test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */

    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('Feed should contain at least one entry', function(done) {
      expect($('.feed .entry').length).toBeGreaterThan(0);
      done();
    });
  });

  /* Test suite "New Feed Selection" */
  describe('New Feed Selection', function() {

    /* Test that ensures when a new feed is loaded
    /* by the loadFeed function that the content actually changes.
    /* Edit allFeeds in app.js to have same URL for two different Feeds to get a test failed
    */

    let feedAfterFirstLoad, feedAfterSecondLoad;

    beforeEach(function(done) {
      loadFeed(0, function () {
         //content of feed container
         // you can use jQuery .html method to do that for You
         feedAfterFirstLoad = $('.feed').html();
         loadFeed(1, function () {
             // get content of feed container again
             feedAfterSecondLoad = $('.feed').html();
             done();
         });
       });
     });

     it('When a new feed is loaded by the loadFeed function the content actually changes', function(done) {
       //We expect feeds to be different
       expect(feedAfterFirstLoad).not.toEqual(feedAfterSecondLoad);
       done();
     })
  });

}());
