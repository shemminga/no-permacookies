# Unmaintained #

This project is **no longer maintained.** I recommend you use the [Vanilla Chrome extension](https://chrome.google.com/webstore/detail/gieohaicffldbmiilohhggbidhephnjj). It has an approach that is superior to mine.

The rest of this page is kept for historical purposes.


---


## What? ##
A Chrome extension that forces all cookies to be session cookies. It has support for exceptions, which can be easily added using a button on the toolbar.

## Why? ##
Cookies are used by all sorts of websites to track you. It's commonly used by advertising providers to profile which sites you visit and what your interests are.

To prevent this, you can block all cookies, but many sites will stop working. Exceptions will help, but to add a permanent exception for a site you visit once is a lot of work for little pay-off.

Forcing session cookies is the perfect compromise. Sites can track you for the duration of your browser session, but not after that.

Chrome doesn't have this behaviour built in (yet?), so this is an extension to do that.

## How? ##
When a cookie is added (or gets updated), No Permacookies! checks the domain against a whitelist. If it isn't found on the whitelist, the cookie's expiration time is set to "when the browser closes".

Adding an exception is very easy: just click the button on the toolbar and click "allow" for the domain you want.

## Screenshots ##

![https://raw.githubusercontent.com/shemminga/no-permacookies/master/screenshots/allowed.png](https://github.com/shemminga/no-permacookies/blob/master/screenshots/allowed.png)

Pop-up on a page where permacookies are allowed.

![https://raw.githubusercontent.com/shemminga/no-permacookies/master/screenshots/not-allowed.png](https://github.com/shemminga/no-permacookies/blob/master/screenshots/not-allowed.png)

Pop-up on a page where permacookies are not allowed.
