# node-red-contrib-logentries

** A Node-Red wrapper for [logentries.com](http://logentries.com) **

Current Version: 0.1


# What it is

An easy-to-use wrapper for the logentries.com service. The _node-red-contrib-logentries_ node makes it very easy to log directly to your logentries.com account direct from Node-Red.


# Key Features:

   * Drag and drop on node-red
   * fully configurable
   * cloud logging enables many sources to arrive in one viewable, searchable location

   
## Installation

	Download and place in your node_modules directory
    npm install logentries
	- This installs the required NodeJs package for logentries service. However it currently requires an update so navigate to your subdirectory of node_modules\logentries\lib and edit logentries.js file so that line 57 is changed from:
	port: opts.secure ? 20000 : 10000,
	to this:
	port: opts.port || (opts.secure ? 20000 : 10000),



## Usage


This module sends your logging entries to the cloud hosted logging service logentries.com. You will need an account with this service for the module to work.

Once you have logentries.com account, you need just one configuration item to initialize a logging instance (you can create more than one):

  * TOKEN: As supplied by Logentries when you create a logfile of source type Token TCP.

[logentries.com User Guide](https://logentries.com/docs/userguide)


## logentries.com service.

Company site: [logentries.com](http://logentries.com)


