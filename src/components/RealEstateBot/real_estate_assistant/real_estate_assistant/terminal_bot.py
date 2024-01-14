"""
terminal_bot.py

This script runs a text-based version of the Real Estate Assistant Bot in the terminal. 
It allows users to interact with the bot directly through the command line, providing 
responses to real estate-related inquiries using OpenAI's API. This terminal-based bot 
is ideal for testing and demonstration purposes.

The bot uses the 'ask_openai' function from the 'core_bot' module to process user inputs 
and generate responses. Users can interact with the bot by typing their queries and 
can exit the bot by typing 'quit'.

Dependencies:
- core_bot.py: A custom script for handling OpenAI API calls and response generation

Usage:
- Run this script in a terminal to start interacting with the bot.
- Type a query and press Enter to receive a response.
- Type 'quit' and press Enter to exit the bot.

Anthony Mercadante, Mohawk College, November 2023
"""

from core_bot import ask_openai

def run_terminal_bot():
    """
    Runs the Real Estate Bot in terminal mode, allowing user interaction through text input.
    The function loops to continuously accept user input and provide responses until the user
    decides to exit by typing 'quit'.
    """
    print("Real Estate Bot is running in terminal mode. Type 'quit' to exit.")

    # Main loop for user interaction
    while True:
        user_input = input("You: ")
        if user_input.lower() == 'quit':
            break

        # Get the response from the core bot module
        response = ask_openai(user_input)
        print("RealEstateBot:", response)

if __name__ == "__main__":
    # Execute the terminal bot function
    run_terminal_bot()
