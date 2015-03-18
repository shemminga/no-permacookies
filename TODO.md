# To do #
### Top list ###

  * Force cookie into session cookie when domain is removed from whitelist
  * Store cookie expires date in local storage so an exception can be added after the cookie was set (?)
    * Only if it can be done safely; i.e. cookie/domain info isn't stored longer than the browser session.
    * Delete when exiting
    * Maybe periodically (do you really need it longer than five minutes or so?)
  * Test Punycode for international domains and convert to UTF-8 before display.
  * Disable top-level domains in the popup.
    * Think of tlds that use a second level
      * Use http://publicsuffix.org/
  * Auto-update

### To think about a solution ###

  * Disable button for people who don't want it. (Who use options page instead.)
    * Seems impossible to disable :-(
    * Alternatives:
      * Disable the popup or restrict its content so no button is displayed
      * Use page action instead of browser action (in the omnibar)
        * May be usable when combined with only displaying when there are cookies, which requires storing of cookie expiration. See above.
      * Use right-click menu (?)
  * Have a popup when cookies are set, to make the decision on the spot?
    * Can't be connected to a tab :-( but can be globally.
    * May get quite overwhelming when loading multiple tabs at the same time
      * Probably overwhelming anyway.
      * May just be acceptable to people who like it/are used to it and who don't really mind the amount of popups.
    * Should be optional.

### Other ###

  * List of cookies and domains they are for in popup to make a more informed decision about whitelist
