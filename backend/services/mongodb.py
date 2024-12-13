from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os
import logging

# Load environment variables from .env file
load_dotenv()

# Get MongoDB URI from the .env file
MONGODB_URI = os.getenv("MONGODB_URI")

# Logger configuration
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def get_mongo_client():
    """
    Create and return a MongoDB client.

    :return: MongoDB client
    :raises: Exception if connection fails
    """
    if not MONGODB_URI:
        raise ValueError("MONGODB_URI not found in environment variables.")
    
    try:
        client = MongoClient(MONGODB_URI, server_api=ServerApi('1'))
        # Test connection
        client.admin.command('ping')
        logger.info("Successfully connected to MongoDB!")
        return client
    except Exception as e:
        logger.error(f"Error connecting to MongoDB: {e}")
        raise

# Example usage
if __name__ == "__main__":
    try:
        mongo_client = get_mongo_client()
        # You can now interact with your MongoDB using `mongo_client`
    except Exception as e:
        logger.error("Failed to initialize MongoDB client.")
