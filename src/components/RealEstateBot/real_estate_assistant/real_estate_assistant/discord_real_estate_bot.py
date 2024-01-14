"""
discord_real_estate_bot.py

This script creates and runs a Discord bot client that serves as a Real Estate Assistant. The bot 
interfaces with the OpenAI API to respond to queries related to real estate, focusing on the Toronto 
and Ontario markets. It listens for messages in Discord, processes them, and uses OpenAI's language 
models to generate responses.

The bot uses a command prefix to distinguish commands from regular messages and supports splitting 
long responses to adhere to Discord's message length limits.

Dependencies:
- discord.py: A Python library for interacting with Discord's API
- core_bot.py: A custom script for handling OpenAI API calls and response generation

Usage:
1. Set up a Discord bot token in 'bot_token.txt'.
2. Run this script to start the bot.
3. Interact with the bot by sending commands prefixed with '!' in a Discord server.

Anthony Mercadante, Mohawk College, November 2023
"""

import discord
from core_bot import ask_openai

class MyClient(discord.Client):
    command_prefix = "!"

    def __init__(self):
        """
        Initializes the Discord client with specific intents required for the bot to function.
        """
        # Define the intents for message and guild events
        intents = discord.Intents.all()
        intents.messages = True
        intents.guilds = True

        # Initialize the client with the defined intents
        super().__init__(intents=intents)

    async def on_ready(self):
        """
        Handles the event when the bot successfully connects to Discord.
        """
        print('Logged on as', self.user)

    async def on_message(self, message):
        """
        Handles incoming messages and responds to commands prefixed with the command_prefix.

        Args:
            message (discord.Message): The message object containing information about the sender and the content.
        """
        # Debug: Print received message and author
        print(f"Received message: '{message.content}' from {message.author}")

        # Ignore messages from the bot itself
        if message.author == self.user:
            print("Message is from the bot itself. Ignoring.")
            return

        # Check if message starts with the command prefix
        if not message.content.startswith(self.command_prefix):
            print(f"Message does not start with the command prefix '{self.command_prefix}'. Ignoring.")
            return

        # Extract the command after the prefix
        command = message.content[len(self.command_prefix):].strip()
        print(f"Extracted command: '{command}'")

        # Fetch response from OpenAI and send back
        try:
            response = await self.loop.run_in_executor(None, ask_openai, command)
            print(f"OpenAI response: '{response}'")
            # Split the response if it's too long and send each chunk
            for chunk in self.split_into_chunks(response, max_length=2000):
                await message.channel.send(chunk)
        except Exception as e:
            error_msg = f"Error while processing message: {e}"
            print(error_msg)
            await message.channel.send(error_msg)

    def split_into_chunks(self, text, max_length):
        """
        Splits a given string into chunks of a specified maximum length.

        Args:
            text (str): The string to be split.
            max_length (int): The maximum length of each chunk.

        Returns:
            list: A list of string chunks.
        """
        return [text[i:i+max_length] for i in range(0, len(text), max_length)]

if __name__ == "__main__":
    # Instantiate the client and run it
    client = MyClient()
    with open("bot_token.txt") as file:
        token = file.read().strip()
    client.run(token)
