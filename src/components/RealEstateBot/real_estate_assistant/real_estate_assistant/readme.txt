Real Estate Assistant Bot Setup Guide

	This guide provides step-by-step instructions on how to set up and run the Real Estate Assistant Bot. 
	The bot is designed to offer information about the Toronto/Ontario real estate market and can be run in two modes:

	- Terminal-based mode
	- Discord bot mode



Prerequisites
	Before you start, ensure you have the following:

	- Python (version 3.6 or higher) installed on your computer. You can download Python from https://www.python.org/downloads/.
	- An OpenAI API key. You can obtain it by signing up at https://openai.com/.
	- spaCy and sklearn Python libraries for advanced natural language processing and machine learning tasks.



Setting Up
	1. Extract the Files: 
		- Unzip the provided file to a folder on your computer.

	2. Install Required Packages: 
		- Open a terminal or command prompt and navigate to the folder containing the extracted files. 
		- Run the following command to install necessary Python packages:
	   		pip install openai discord.py spacy sklearn
	   
	   Note: You may need to download additional spaCy language models using `spacy download en_core_web_sm`.

3. Set Up the OpenAI API Key:

   - Windows:
     1. Open Command Prompt and run:
        	setx OPENAI_API_KEY "Your-OpenAI-API-Key"

     2. Replace `Your-OpenAI-API-Key` with your actual API key.

     3. Restart Command Prompt to apply the changes.

   - macOS/Linux:
     1. Open Terminal and run:
        	export OPENAI_API_KEY="Your-OpenAI-API-Key"

     2. Replace `Your-OpenAI-API-Key` with your actual API key.

     3. To make this change permanent, add the command to your `~/.bashrc` or `~/.bash_profile`.



Running the Terminal Bot
	1. In the terminal or command prompt, navigate to the folder containing the bot files.

	2. Run the bot using the command:
	   	python terminal_bot.py

	3. Interact with the bot by typing questions. Type 'quit' to exit the bot.



Setting Up the Discord Bot
	1. Create a Discord Bot Account:
	   - Visit the Discord Developer Portal https://discord.com/developers/applications.
	   - Create a new application and name it.
	   - Go to the "Bot" tab and click "Add Bot".
	   - Note the bot token (you'll need this later).

	2. Add the Discord Bot Token:
	   - Open the `bot_token.txt` file.
	   - Replace the existing content with your Discord bot token.

	3. Invite the Bot to Your Server:
	   - In the Discord Developer Portal, navigate to the "OAuth2" tab.
	   - Under "Scopes," select "bot".
	   - Under "Bot Permissions," choose the permissions your bot needs.
	   - Use the generated URL to invite the bot to your server.

	4. Run the Discord Bot:
	   - In the terminal or command prompt, run:
	     	python discord_real_estate_bot.py

	   - The bot should now be active on your server.



Using the Discord Bot
	- Use the bot in your server by typing commands prefixed with `!`, followed by your query about the real estate market.
	- Example: `!tell me about the market in Toronto`.



Troubleshooting
	If you encounter any issues, ensure that:
		- Python is correctly installed and in your system's PATH.
		- The OpenAI API key is correctly set as an environment variable.
		- The Discord bot token is correctly placed in `bot_token.txt`.
		- spaCy and sklearn libraries are properly installed.

For further assistance, refer to the official documentation of Python, Discord.py, OpenAI, spaCy, and sklearn.